/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    user: import('better-auth').User | null;
    session: import('better-auth').Session | null;
    runtime: {
      env: {
        DB: D1Database;
        BETTER_AUTH_SECRET?: string;
        BETTER_AUTH_URL?: string;
      };
    };
  }
}