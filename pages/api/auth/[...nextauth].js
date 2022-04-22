import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "./../../../lib/mongodb"

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: {
    jwt: true
  },
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  pages: {
    signIn: '/singin',
    verifyRequest: '/verify-request',
  },
})