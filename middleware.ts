// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { logtoClient } from '@/app/lib/logto';
import {getServerSideConfig} from "@/app/config/server";

export async function middleware(request: NextRequest) {
    // 你可以在这里访问请求的详细信息，例如 URL, headers 等。
    const config = getServerSideConfig();
    const profile = await logtoClient.getLogtoContext(request);
    if (config.logtoEnable && !profile.isAuthenticated && !request.url.includes("/api/logto/")) {
        return NextResponse.redirect(new URL('/api/logto/sign-in', request.url));
    }

    // 然后你可以返回一个响应
    return NextResponse.next();
}
