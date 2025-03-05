export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
export const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
export const SERVER_URL = import.meta.env.VITE_SERVER_URL;
export const SERVER_API_URL = `${SERVER_URL}/api`;

export const GITHUB_AUTH_REDIRECT_URL = `http://localhost:5173/auth/callback/github`;
export const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${GITHUB_AUTH_REDIRECT_URL}&scope=user:email,read:org`;

export const GOOGLE_AUTH_REDIRECT_URL = `http://localhost:5173/auth/callback/google`;
export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_AUTH_REDIRECT_URL}&response_type=code&scope=email%20profile%20openid&access_type=offline&prompt=consent`;
