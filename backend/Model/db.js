const mongoose = require('mongoose');
const dns = require('dns');

const mongoose_url = process.env.MONGO_CONN;
let retried = false;

function connect() {
    mongoose.connect(mongoose_url, { serverSelectionTimeoutMS: 10000 })
        .then(() => {
            console.log("mongodb is connected...")
        }).catch((err) => {
            console.log("mongodb connection error", err);
            if (!retried && /querySrv|getaddrinfo|ENOTFOUND/i.test(err.message)) {
                retried = true;
                console.log("Retrying with public DNS servers...");
                dns.setServers(['8.8.8.8', '1.1.1.1']);
                connect();
            }
        });
}

connect();