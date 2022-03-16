import Head from 'next/head'
import NavigationDashboard from "../../components/tailwindui/NavigationDashboard";
import MyComponent from "../../components/MyComponent";

function Page2() {
  return (
    <div>
      <Head>
        <title>Page 2</title>
      </Head>
      <p>This is Page 2</p>

      <p>MyComponent</p>
      <MyComponent />


      <NavigationDashboard />
    </div>
  )
}

export default Page2
