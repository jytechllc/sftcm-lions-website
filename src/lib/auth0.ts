import { Auth0Client } from "@auth0/nextjs-auth0/server";

// Shared JY Tech Auth0 tenant ("JYTech Web" app). Env vars:
//   AUTH0_SECRET, APP_BASE_URL, AUTH0_DOMAIN, AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET
export const auth0 = new Auth0Client();
