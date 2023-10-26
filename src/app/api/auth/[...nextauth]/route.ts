import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from "@/helpers/constants.js"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "მომხმარებელი",
          type: "text",
          // placeholder: "მომხმარებელი",
        },
        password: {
          label: "პაროლი",
          type: "password",
          // placeholder: "პაროლი",
        },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.username || !credentials.password)
          return null;

        const user = users.find(
          (item) => item.username === credentials.username
        );
        if (user?.password === credentials.password) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
