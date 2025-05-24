import type { NextAuthConfig } from 'next-auth';
 // this part it´s from tutorial which vercel didn´t worked
//export const authConfig = {
  //pages: {
    //signIn: '/login',
  //},
  //callbacks: {
    //authorized({ auth, request: { nextUrl } }: any) {
      //const isLoggedIn = !!auth?.user;
      //const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      //if (isOnDashboard) {
        //if (isLoggedIn) return true;
       // return false; // Redirect unauthenticated users to login page
      //} else if (isLoggedIn) {
        //return Response.redirect(new URL('/dashboard', nextUrl));
      //}
      //return true;
    //},
  //},
  //providers: [], // Add providers with an empty array for now
//} satisfies NextAuthConfig;

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }: any) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

      if (isOnDashboard) {
        // Bloqueia se não estiver logado → redireciona automaticamente para /login
        return isLoggedIn;
      }

      // Fora do dashboard, permite acesso sempre
      return true;
    },
  },
  providers: [], // Pode adicionar provedores depois
} satisfies NextAuthConfig;
