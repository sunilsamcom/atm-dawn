import Head from 'next/head'
import NavigationDashboard from "@app/components/tailwindui/NavigationDashboard";

function Page3() {
  return (
    <div>
      <Head>
        <title>Page 3</title>
      </Head>
      <p>This is Page 3</p>

      <NavigationDashboard />
    </div>
  )
}

export default Page3
