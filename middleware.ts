// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { supabase } from './config/supabase';

// This function can be marked `async` if using `await` inside
export default async function middleware(req: NextRequest) {
    const  auth = req.cookies.get('auth')?.value
    console.log("this is the sesson")
   
  
   
    const url = req.url;
    const {pathname} = req.nextUrl;
  //protect the app route
    if (pathname.startsWith("/app")) {
      if (auth === undefined) {
        req.nextUrl.pathname = "/auth";
       
        return NextResponse.redirect(req.nextUrl);
      }
        return NextResponse.next();      
    }
    // redirect user if they are authenticated
    if (pathname.startsWith("/auth") || pathname.endsWith("/") ) {
      if (auth) {
        req.nextUrl.pathname = "/app";
       
        return NextResponse.redirect(req.nextUrl);
      }
           return NextResponse.next();   
    }
  
  
  // if none of the conditions are matte then just continue
  
    return NextResponse.next();
  }

