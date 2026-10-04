import { defineMiddleware } from 'astro:middleware';
import { auth } from "./lib/auth"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { env } from "cloudflare:workers"
export const onRequest = defineMiddleware(async (context, next) => {


  if (env?.DB) {
    const sessionData = await auth.api.getSession({
      headers: context.request.headers,
    });

    context.locals.user = sessionData?.user ?? null;
    context.locals.session = sessionData?.session ?? null;
  } else {
    context.locals.user = null;
    context.locals.session = null;
  }

  return next();
});