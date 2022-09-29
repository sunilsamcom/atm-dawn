import Head from "next/head";
import { Button, Checkbox, JsonInput, MultiSelect } from "@mantine/core";

import NavigationDashboard from "@app/components/tailwindui/NavigationDashboard";
//import NavigationDashboard from ".././../components/tailwindui/NavigationDashboard";

function Page1() {
  const data = [
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "vue", label: "Vue" },
    { value: "riot", label: "Riot" },
    { value: "next", label: "Next.js" },
    { value: "blitz", label: "Blitz.js" },
  ];
  return (
    <div>
      <Head>
        <title>Mantine Demo Page</title>
      </Head>
      <p>This is Page 1 - Mantine Demo Page</p>
      <Button color="red" compact>
        Settings
      </Button>
      <Checkbox label="I agree to sell my privacy" />
      <JsonInput
        label="Your package.json"
        placeholder="Textarea will autosize to fit the content"
        validationError="Invalid json"
        formatOnBlur
        autosize
        minRows={4}
      />
      <MultiSelect
        data={data}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
      />
      <NavigationDashboard />{" "}
    </div>
  );
}

export default Page1;

// export { getStaticProps } from "@app/config/i18n/getStaticProps";
