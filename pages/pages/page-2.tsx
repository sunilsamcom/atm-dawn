import Head from 'next/head'
import NavigationDashboard from ".././../components/tailwindui/NavigationDashboard";
import MyComponent from "../../components/MyComponent";
import Link from "../../components/Link";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Page2() {
  return (
    <div>
      <Head>
        <title>Page 2</title>
      </Head>
      <p>This is Page 2</p>

      <p>MyComponent</p>
      <MyComponent href={'/pages/page-1'} className={classNames("underline", "text-red-600", "hover:text-red-800", "visited:text-red-600")} >
        <p>MyComponent (for Page-1) (Red Styling)</p>
      </MyComponent>
      <MyComponent href={'/pages/page-1'} >
        <p>MyComponent (for Page-1) (Default Styling)</p>
      </MyComponent>
      <p>----------</p>
      <p>(ATM)Link</p>
      <Link href={'/pages/page-1'}>
        <p>Link for Page-1</p>
      </Link>
      <p>----------</p>
      <NavigationDashboard />
    </div>
  )
}

export default Page2
