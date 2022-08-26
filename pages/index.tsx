// import styles from '../styles/home.module.css'

import { useSession, signIn, signOut } from "next-auth/react";
import NavigationDashboard from "../components/tailwindui/NavigationDashboard";

function Home() {
  const { data: session } = useSession();
  //   const session = useSession().data
  console.log("session", session);
  if (session != undefined) {
    return (
      <>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        Signed in as {session.user.email} <br />
        Access Token: {session.access_token} <br />
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
      Not signed in <br />
      <button id="signInBtn" onClick={() => signIn()}>
        Sign in
      </button>
      {/* <button onClick={() => signOut()}>Sign out</button> */}
    </>
  );
}

export default Home;
