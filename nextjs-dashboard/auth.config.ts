import CredentialsProvider from "next-auth/providers/credentials";

import type { NextAuthConfig } from 'next-auth';
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }: any) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
       return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [CredentialsProvider({
    name: "Credentials",
    credentials: {
      username: { label: "Username", type: "text" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials: Record<string, unknown> | undefined) {
      const username = credentials?.username as string | undefined;
      const password = credentials?.password as string | undefined;

      if (username === "admin" && password === "admin") {
        return {
          id: "1",
          name: "Admin",
          email: "admin@example.com"
        };
      }

      return null;
    }
  })
],
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig;

