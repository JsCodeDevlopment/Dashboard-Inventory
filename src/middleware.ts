import { routesMap } from "@/constants/routes-map";
import { user } from "@/services/user";
import { NextRequest, NextResponse } from "next/server";

const redirectToLogin = (req: NextRequest) => {
  const response = NextResponse.redirect(new URL(routesMap.login, req.nextUrl));
  response.cookies.delete("SECRET_COOKIE");
  return response;
};

const redirectToDashboard = (req: NextRequest) => {
  return NextResponse.redirect(new URL(routesMap.dashboard, req.nextUrl));
};

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = req.cookies.get("SECRET_COOKIE");
  if (!token && path.startsWith(routesMap.app)) {
    return redirectToLogin(req);
  }

  if (token) {
    try {
      const isValidUser = await user.me();
      if (isValidUser && path.startsWith(routesMap.login)) {
        return redirectToDashboard(req);
      }

      if (!isValidUser && path.startsWith(routesMap.app)) {
        return redirectToLogin(req);
      }
    } catch (error) {
      console.error("Error", error);
      redirectToLogin(req);
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
