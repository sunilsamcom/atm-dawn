import Head from 'next/head'
import NavigationDashboard from "@app/components/tailwindui/NavigationDashboard";

function Page1() {
  return (
    <div>
      <Head>
        <title>Page 1</title>
      </Head>
      <p>This is Page 1</p>

      <NavigationDashboard />
    </div>
  )
}

export default Page1
