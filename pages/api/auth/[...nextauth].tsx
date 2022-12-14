import NextAuth from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'
//import EmailProvider from 'next-auth/providers/email'
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthData, Login,VoluumUser } from '../../../services/voluum/login';

import { Dummy } from '../../../services/voluum/dummy';
//import { VoluumUser } from "../../../services/voluum/login";
export default NextAuth({
  providers: [

    // // Passwordless / email magic links sign in
    // EmailProvider({
    //     server: process.env.MAIL_SERVER,
    //     from: 'NextAuth.js <no-reply@example.com>'
    // }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Voluum",
      id: "voluum",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "email", type: "email", value: process.env.VOLUUM_USERNAME || "email@rise.io" },
        password: { label: "Password", type: "password" }
        //  mfa: { label: "Multifactor Token", type: "text", style:"display:none" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        var credentials2 = credentials;

        let authData;
        if (process.env.NODE_ENV == "development") {
          authData = new AuthData(process.env.VOLUUM_USERNAME, process.env.VOLUUM_PASSWORD);
          console.log("Using (.env) dev login");
        } else {
          authData = new AuthData(credentials2.email, credentials2.password);
        }

        let voluumLogin = new Login(fetch);
        let user = await voluumLogin.login(authData);

        //console.log(authData);

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }

        //global catch thats trhow an error and log it
      }
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Dummy",
      id: "dummy",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {

      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied


        return (new Dummy).login();

        //global catch thats trhow an error and log it
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {

      let voluum_user = (user as unknown as VoluumUser);
      // Persist the OAuth access_token to the token right after signin
      if (user) {

        token.accessToken = voluum_user.authToken.token; //with acessToken we can query
        let token_expire_ts = (new Date(voluum_user.authToken.expirationTimestamp)).getTime();
        token.tokenExpires = token_expire_ts / 1000;
        token.email = voluum_user.profile.email;
        token.sub = voluum_user.profile.id+"";
        //token.name = voluum_user.profile.firstName;// + " " + (user.profile.lastName+"");
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      
      let token_expires = token.tokenExpires as number;
      
      let now = (new Date()).getTime()/1000;

      if (now > token_expires) {
        session.expires = (new Date())+"";
        session.token = "EXPIRED";
        return session;
      }
      session.token = token.accessToken;
      
      session.expires = (new Date((token_expires * 1000)))+"";

      return session
    }
  }
})
