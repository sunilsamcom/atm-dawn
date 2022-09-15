import {logger} from '@app/services/logger'
// eslint-disable-next-line @next/next/no-server-import-in-page
import type { NextFetchEvent, NextRequest } from "next/server";
// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextResponse } from "next/server";

export default function middleware(req: NextRequest, ev: NextFetchEvent) {
  const response = NextResponse.next()

  let logRequest = !(
    req.nextUrl.pathname.includes("/_next/") ||
    req.nextUrl.pathname.includes("/favicon.ico")
  )
  // eslint-disable-next-line no-constant-condition
  if(logRequest && false) {
    console.log("--------MIDDLEWARE NEXT.JS (START)--------");
    console.log("Method:", req.method);
    console.log("Content-Type:", req.headers.get("content-type"));
    console.log("Route:", req.nextUrl.pathname);
    console.log("Query String:", req.nextUrl.search);
    console.log("Query Parameters:", req.nextUrl.searchParams);
    console.log("--Headers:")
    req.headers.forEach((value, key, parent) => console.log(key + ": " + value))
    console.log("--End of Headers")

    // console.log("Request: " + JSON.stringify(req));
    // console.log("Event: " + JSON.stringify(ev));
    // console.log("Response: " + JSON.stringify(response));
    console.log("--------MIDDLEWARE NEXT.JS (END)--------");
  }

  return response;
}

// export default function middleware(req: NextRequest, ev: NextFetchEvent) {
//   const response = NextResponse.next()
//   logger.debug("Request: " + req);
//   logger.debug("Event: " + ev)
//   return response;
// }
