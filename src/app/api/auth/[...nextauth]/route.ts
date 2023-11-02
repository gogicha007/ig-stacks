import { connectToDatabase } from "@/helpers/server-helpers";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../prisma/script";
import bcrypt from "bcrypt";

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
        try {
          await connectToDatabase();
          const user = await prisma.user.findFirst({
            where: { username: credentials.username },
          });
          if (!user?.password) {
            return null;
          }
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isPasswordCorrect) {
            return user;
          }
          return null;
        } catch (error) {
          console.log("error" + error);
        } finally {
          await prisma.$disconnect();
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
