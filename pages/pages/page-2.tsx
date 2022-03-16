import Head from 'next/head'
import NavigationDashboard from "../../components/tailwindui/NavigationDashboard";
import MyComponent from "../../components/MyComponent";
import MyHelloComponent from "../../components/MyHelloComponent";
import Link from "../../components/Link";
import CustomLink from "../../components/CustomLink";

function Page2() {
  return (
    <div>
      <Head>
        <title>Page 2</title>
      </Head>
      <p>This is Page 2</p>

      <p>MyComponent</p>
      <MyComponent href={'/pages/page-1'} className={''}>
        <p>MyComponent (for Page-1)</p>
      </MyComponent>
      <p>----------</p>
      {/*<p>MyHelloComponent</p>*/}
      {/*<MyHelloComponent />*/}
      {/*<p>----------</p>*/}
      {/*<p>(ATM)Link</p>*/}
      {/*<Link href={'/pages/page-1'}>*/}
      {/*  <p>Link for Page-1</p>*/}
      {/*</Link>*/}
      {/*<p>----------</p>*/}
      {/*<p>CustomLink</p>*/}
      {/*<CustomLink href={'/pages/page-1'}>*/}
      {/*  <p>Custom Link for Page-1</p>*/}
      {/*</CustomLink>*/}
      {/*<p>----------</p>*/}
      <NavigationDashboard />
    </div>
  )
}

export default Page2
