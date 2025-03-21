export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
export const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
export const SERVER_URL = import.meta.env.VITE_SERVER_URL;
export const SERVER_API_URL = `${SERVER_URL}/api`;
export const OAUTH_REDIRECT_URL = import.meta.env.VITE_OAUTH_REDIRECT_URL;

export const GITHUB_AUTH_REDIRECT_URL = `$${OAUTH_REDIRECT_URL}/github`;
export const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${GITHUB_AUTH_REDIRECT_URL}&scope=user:email,read:org`;

export const GOOGLE_AUTH_REDIRECT_URL = `${OAUTH_REDIRECT_URL}/google`;
export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_AUTH_REDIRECT_URL}&response_type=code&scope=email%20profile%20openid&access_type=offline&prompt=consent`;

export const DSS_INSTAGRAM_URL = "https://www.instagram.com/dss_vjit/";
export const DSS_LINKEDIN_URL = "https://www.linkedin.com/company/dss-vjit";
export const DSS_GITHUB_URL = "https://github.com/dssvjit";
