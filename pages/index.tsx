// import styles from '../styles/home.module.css'

import { Trans } from "@lingui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import NavigationDashboard from "../components/tailwindui/NavigationDashboard";


function Home() {
  const { data: session } = useSession() || {}; //const session = useSession().data
  if (session) {
    return (
      <>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        Signed in as {session.user.email} <br />
        Access Token: {session.accessToken} <br />
        {/*<div>Access Token: {session.access_token}</div>*/}
        <p></p>
        <button onClick={() => console.log("You clicked index page button!")}>
          Click me to log something!
        </button>
        <p></p>
        <button onClick={() => signOut()}>Sign out</button>
        <NavigationDashboard />
      </>
    );
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline">Please login:</h1>
      <h1>
        <Trans id={""}>My text to be translated</Trans>
      </h1>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

export default Home;
