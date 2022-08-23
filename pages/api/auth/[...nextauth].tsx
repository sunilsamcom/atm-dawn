import NextAuth from 'next-auth'

// import GoogleProvider from 'next-auth/providers/google'
import AWSCognitoProvider from 'next-auth/providers/cognito'
//import EmailProvider from 'next-auth/providers/email'
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthData, Login } from '@app/services/voluum/login';
import { Dummy } from '@app/services/voluum/dummy';

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

        let authData;
        if (process.env.NODE_ENV == "development") {
          authData = new AuthData(process.env.VOLUUM_USERNAME, process.env.VOLUUM_PASSWORD);
          console.log("Using (.env) dev login");
        } else {
          authData = new AuthData(credentials.email, credentials.password);
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


        // implement as any here because
        return (new Dummy).login(credentials as any) as any

        //global catch thats trhow an error and log it
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }: any) {
      // Persist the OAuth access_token to the token right after signin
      if (user) {
        if (user.authToken) {
          // this means that this auth is came from Voluum Integration and Dummy login using Voluum User class
          token.accessToken = user.authToken.token; //with acessToken we can query
          let token_expire_ts = (new Date(user.authToken.expirationTimestamp)).getTime();
          token.tokenExpires = Math.floor(token_expire_ts / 1000);
          token.email = user.profile.email;
          token.sub = user.profile.id;
          token.name = user.profile.firstName + " " + user.profile.lastName;
        }
      }
      return token
    },
    async session({ session, token, user }: any) {
      // Send properties to the client, like an access_token from a provider.
      let now = Math.floor((new Date()).getTime() / 1000);
      if (process.env.NODE_ENV !== "development") {
        // only run this condition if the environment is not in `development`
        // to make the Dummy Login Credential Provider work.
        if (now > token.tokenExpires) {
          return {};
        }
      }
      session.accessToken = token.accessToken;
      session.expires = (new Date(token.tokenExpires * 1000))

      return session
    }
  }
})
