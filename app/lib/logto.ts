import LogtoClient from "@logto/next/edge";
import { getServerSideConfig } from "@/app/config/server";

const serverConfig = getServerSideConfig();

export const logtoClient = new LogtoClient({
  endpoint: serverConfig.logtoEndpoint,
  appId: serverConfig.logtoAppID,
  appSecret: serverConfig.logtoAppSecret,
  baseUrl: serverConfig.logtoBaseURL.replace(/\/+$/, ""), // Change to your own base URL
  cookieSecret: serverConfig.logtoCookieSecret, // Auto-generated 32 digit secret
  cookieSecure: process.env.NODE_ENV === "production",
});
