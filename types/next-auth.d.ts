// next-auth.d.ts
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      email: string;
      // Add other properties as needed
    } & DefaultSession["user"];
  }
}
 