export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
export const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
export const SERVER_URL = import.meta.env.VITE_SERVER_URL;
export const SERVER_API_URL = `${SERVER_URL}/api`;

export const GITHUB_AUTH_REDIRECT_URL = `http://localhost:5173/auth/callback/github`;
export const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${GITHUB_AUTH_REDIRECT_URL}&scope=user:email,read:org`;
