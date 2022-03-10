import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/home.module.css'

import { useSession, signIn, signOut } from "next-auth/react"

export default Home;

function Home() {
  const { data: session } = useSession() //const session = useSession().data
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      Access Token: {session.access_token} <br/>
      {/*<div>Access Token: {session.access_token}</div>*/}
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>

  // return (
  //   <div className={styles.container}>
  //     <Head>
  //       <title>ATM</title>
  //       <meta name="description" content="The Affiliate Tracking and Advertisement Management and Optimization platform" />
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>
  //
  //     <main className={styles.main}>
  //       <h1 className={styles.title}>
  //         Welcome to ATM Webapp by <a href="https://rise.io">Rise.io</a>
  //       </h1>
  //
  //       <p className={styles.description}>
  //         Get started by editing{' '}
  //         <code className={styles.code}>pages/index.js</code>
  //       </p>
  //
  //       <div className={styles.grid}>
  //         <a href="https://nextjs.org/docs" className={styles.card}>
  //           <h2>Documentation &rarr;</h2>
  //           <p>Find in-depth information about Next.js features and API.</p>
  //         </a>
  //
  //         <a href="https://nextjs.org/learn" className={styles.card}>
  //           <h2>Learn &rarr;</h2>
  //           <p>Learn about Next.js in an interactive course with quizzes!</p>
  //         </a>
  //
  //         <a
  //             href="https://github.com/vercel/next.js/tree/canary/examples"
  //             className={styles.card}
  //         >
  //           <h2>Examples &rarr;</h2>
  //           <p>Discover and deploy boilerplate example Next.js projects.</p>
  //         </a>
  //
  //         <a
  //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //             className={styles.card}
  //         >
  //           <h2>Deploy &rarr;</h2>
  //           <p>
  //             Instantly deploy your Next.js site to a public URL with Vercel.
  //           </p>
  //         </a>
  //       </div>
  //     </main>
  //
  //     <footer className={styles.footer}>
  //       <a
  //           href="https://vercel.com"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //       >
  //         Powered by{' '}
  //         <span className={styles.logo}>
  //           <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
  //         </span>
  //       </a>
  //     </footer>
  //
  //   </div>
  // )
}
