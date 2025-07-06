
# 🌍 AI Trip Generator

An intelligent full-stack travel planner that helps users generate personalized trip itineraries using AI, manage their travel preferences, and securely log in — all through a sleek React frontend and powerful Node.js backend.

## ✨ Features

- 🔐 User Authentication (Register & Login)
- 🤖 AI-powered trip generation based on user input
- ✈️ Trip history management
- 🌐 Fully deployed frontend and backend
- ⚡ Fast and mobile-friendly UI with React.js
- 🌍 CORS-secure integration between Netlify and Render

---

## 📦 Tech Stack

### Frontend
- React.js (with hooks and functional components)
- Tailwind CSS or plain CSS (based on your setup)
- Deployed on [Netlify](https://www.netlify.com)

### Backend
- Node.js & Express.js
- MongoDB (Mongoose ODM)
- dotenv for environment configuration
- CORS configured for Netlify deployment
- Deployed on [Render](https://render.com)

---

## 🔗 Live Demo

- 🌐 **Frontend**: [https://ai-based-tripgenerator.netlify.app](https://ai-based-tripgenerator.netlify.app)
- ⚙️ **Backend**: [https://ai-trip-generator.onrender.com](https://ai-trip-generator.onrender.com)

---

## 🚀 Getting Started (Local Development)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/AI-Trip-Generator.git
cd AI-Trip-Generator
````

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `/backend`:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
```

Start the backend:

```bash
npm start
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

Create a `.env` file inside `/frontend`:

```env
REACT_APP_API_URL=https://ai-trip-generator.onrender.com
```

Start the frontend:

```bash
npm start
```

---

## 📁 Project Structure

```
AI-Trip-Generator/
├── backend/
│   ├── Model/
│   ├── Routes/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   ├── public/
│   ├── .env
│   └── package.json
└── README.md
```

---

## 🛡️ Security

* CORS policy configured to allow only the frontend origin
* `.env` used for sensitive environment variables
* `node_modules` and `.env` are Git-ignored

---

## 🙌 Contributing

Feel free to open issues or submit pull requests if you'd like to improve the project!

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

```

---

Let me know if you'd like to include:
- Screenshots or GIFs of the UI
- API route documentation
- Specific AI logic used for trip generation (e.g., ChatGPT, OpenAI API)

I can extend the README for that too.
```
