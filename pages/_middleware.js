import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req) {
    
    const url = req.nextUrl.clone()
    
    if (url.pathname === "/" || url.pathname === "/favicon.ico"){
        const session = await getToken({
            req,
            secret: process.env.JWT_SECRET,
            secureCookie: process.env.NODE_ENV === "production"
        });

        if (!session){
            url.pathname = "/home";
            return NextResponse.redirect(url);
        }
    }

    // return NextResponse.next()
}