require('dotenv').config();
const mongoose = require('mongoose');
const dns = require('dns');

(async () => {
    const uri = process.env.MONGO_CONN;
    if (!uri) {
        console.error('MONGO_CONN is not set.');
        console.error('Create backend/.env with: MONGO_CONN=mongodb+srv://<user>:<pass>@<cluster>/<dbname>');
        process.exit(1);
    }

    const masked = uri.replace(/\/\/[^:@/]+(:[^@/]+)?@/, '//***:***@');
    console.log('Testing connection to:', masked);

    try {
        await mongoose.connect(uri, { serverSelectionTimeoutMS: 10000 });
        console.log('SUCCESS: MongoDB is reachable and authentication works.');
        await mongoose.connection.close();
        process.exit(0);
    } catch (err) {
        if (/querySrv|getaddrinfo|ENOTFOUND/i.test(err.message)) {
            console.error('FAILED:', err.message);
            console.error('Retrying with public DNS servers (8.8.8.8 / 1.1.1.1)...');
            try { await mongoose.connection.close(); } catch (_) {}
            dns.setServers(['8.8.8.8', '1.1.1.1']);
            try {
                await mongoose.connect(uri, { serverSelectionTimeoutMS: 10000 });
                console.log('SUCCESS (via public DNS): MongoDB is reachable and authentication works.');
                await mongoose.connection.close();
                process.exit(0);
            } catch (err2) {
                console.error('FAILED:', err2.message);
            }
        } else {
            console.error('FAILED:', err.message);
        }
        console.error('Likely causes: wrong credentials, wrong cluster host, or Atlas Network Access does not allow 0.0.0.0/0.');
        process.exit(1);
    }
})();
