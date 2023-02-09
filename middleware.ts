// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export default async function middleware(req: NextRequest) {
    const  auth = req.cookies.get('auth')?.value
   
    const url = req.url;
    const {pathname} = req.nextUrl;
  
    if (pathname.startsWith("/app")) {
      if (auth === undefined) {
        req.nextUrl.pathname = "/auth";
       
        return NextResponse.redirect(req.nextUrl);
      }
  
   
       
        
       
        return NextResponse.next();
      
    }
  
  
  
    return NextResponse.next();
  }

