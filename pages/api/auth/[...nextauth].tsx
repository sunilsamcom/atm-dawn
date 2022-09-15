import NextAuth from 'next-auth'

// import GoogleProvider from 'next-auth/providers/google'
import AWSCognitoProvider from 'next-auth/providers/cognito'
//import EmailProvider from 'next-auth/providers/email'
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthData, Login, VoluumUser } from '@app/services/voluum/login';
import { Dummy } from '@app/services/voluum/dummy';
import {logger} from '@app/services/logger'

//import { VoluumUser } from "../../../services/voluum/login";
export default NextAuth({
  providers: [
    // OAuth authentication providers...
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
    AWSCognitoProvider({
      clientId: process.env.AWS_COGNITO_APP_CLIENT_ID,
      clientSecret: process.env.AWS_COGNITO_APP_CLIENT_SECRET,
      issuer: process.env.AWS_COGNITO_APP_DOMAIN,

    }),
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
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user as any
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


        // set return type as `any` because authorize method required it to be `UserCredentialsConfig` type
        return (new Dummy).login() as any
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {

      let voluum_user = (user as unknown as VoluumUser);
      // Persist the OAuth access_token to the token right after signin
      if (user) {
        // added this condition to make sure that this implementation below will only work in Voluum Auth.
        // could enhance this more in the future if we will support more auth providers.
        if (user.authToken) {
          token.accessToken = voluum_user.authToken.token; //with acessToken we can query
          let token_expire_ts = (new Date(voluum_user.authToken.expirationTimestamp)).getTime();
          token.tokenExpires = Math.floor(token_expire_ts / 1000);
          token.email = voluum_user.profile.email;
          token.sub = voluum_user.profile.id+"";
          //token.name = voluum_user.profile.firstName;// + " " + (user.profile.lastName+"");
        }
      }
      return token
    },
    async session({ session, token, user }: any) {
      // Send properties to the client, like an access_token from a provider.

      let token_expires = token.tokenExpires as number;

      let now = Math.floor((new Date()).getTime() / 1000);
      if (now > token_expires) {
        session.expires = (new Date())+"";
        session.token = "EXPIRED";
        return session;
      }
      session.token = token.accessToken;

      session.expires = (new Date((token_expires * 1000)))+"";

      return session
    }
  },
  // cookies: {
  //   sessionToken: {
  //     name: `__Secure-next-auth.session-token`, // Make sure to add conditional logic so that the name of the cookie does not include `__Secure-` on localhost
  //     options: { // All of these options must be specified, even if you're not changing them
  //       httpOnly: true,
  //       sameSite: 'lax',
  //       path: '/',
  //       secure: true,
  //       domain: `example.com` // Ideally, you should use an environment variable for this
  //     }
  //   }
  // },
  debug: process.env.NODE_ENV !== "production",
  logger: {
    error(code, metadata) {
      logger.error(code, metadata)
    },
    warn(code) {
      logger.warn(code)
    },
    debug(code, metadata) {
      logger.debug(code, metadata)
    }
  },
  events: {
    async signIn(message) {
      /* on successful sign in */
      logger.debug("NexAuth Event - signIn - Message:" + JSON.stringify(message));
    },
    async signOut(message) {
      /* on signout */
      logger.debug("NexAuth Event - signOut - " + JSON.stringify(message));
    },
    async createUser(message) {
      /* user created */
      logger.debug("NexAuth Event - createUser - " + JSON.stringify(message));
    },
    async updateUser(message) {
      /* user updated - e.g. their email was verified */
      logger.debug("NexAuth Event - updateUser - " + JSON.stringify(message));
    },
    async linkAccount(message) {
      /* account (e.g. Twitter) linked to a user */
      logger.debug("NexAuth Event - linkAccount - " + JSON.stringify(message));
    },
    async session(message) {
      /* session is active */
      logger.debug("NexAuth Event - session - " + JSON.stringify(message));
    },
  }
})
