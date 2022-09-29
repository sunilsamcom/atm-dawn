// import styles from '../styles/home.module.css'
import Head from "next/head";
import Image from "next/image";

import styles from "@app/styles/home.module.css";
import { Trans } from "@lingui/macro";
import { useSession, signIn, signOut } from "next-auth/react";
// import "react-date-range/dist/styles.css"; // main css file
import NavigationDashboard from "@app/components/tailwindui/NavigationDashboard";
// import "react-date-range/dist/theme/default.css"; // theme css file

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

export { getStaticProps } from "@app/config/i18n/getStaticProps";
