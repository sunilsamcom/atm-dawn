import Head from 'next/head'
import NavigationDashboard from "../../components/tailwindui/NavigationDashboard";

function Page2() {
  return (
    <div>
      <Head>
        <title>Page 2</title>
      </Head>
      <p>This is Page 2</p>

      <NavigationDashboard />
    </div>
  )
}

export default Page2
