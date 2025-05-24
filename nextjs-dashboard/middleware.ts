// here I had to change the tutorial code because in the url didn´t work but I kept to show that I followed the tutorial
//import NextAuth from 'next-auth';
//import { authConfig } from './auth.config';
 
//export default NextAuth(authConfig).auth;
 
//export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  //matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
//};

import { auth } from './auth';

export default auth;

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
