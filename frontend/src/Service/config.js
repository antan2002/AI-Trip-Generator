const isDev = !import.meta.env.PROD;

export const BACKEND_URL = isDev
    ? 'http://localhost:8080'
    : 'https://ai-trip-generator.onrender.com';
