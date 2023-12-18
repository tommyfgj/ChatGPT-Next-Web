import { type NextRequest } from "next/server";

import { logtoClient } from "@/app/lib/logto";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  return logtoClient.handleUser()(request);
}
