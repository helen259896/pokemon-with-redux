import { NextResponse, type NextRequest, userAgent } from "next/server";


export default function middle(request: NextRequest) {
  const response = NextResponse.next();
  // const theme = request.cookies.get('theme');
  const userAg = userAgent(request);
  console.log('middleware', userAg);
  // response.cookies.set('theme', 'dark');
  return response;
  // if (request.nextUrl.pathname === '/profile')
  // // return NextResponse.redirect(new URL("/hello", request.url))
  // return NextResponse.rewrite(new URL("/hello", request.url))
}
// export default function middle(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url))
// }

// export const config = {
//   matcher: "/profile",
// }