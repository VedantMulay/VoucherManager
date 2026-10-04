import type { APIRoute } from 'astro';
import { auth } from "@/lib/auth.ts"


export const ALL: APIRoute = async (context) => {
  // Access runtime environment bindings from Astro Context


  return auth.handler(context.request);
};