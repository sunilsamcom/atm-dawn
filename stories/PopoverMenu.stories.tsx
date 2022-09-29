import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PopoverMenu from "./PopoverMenu";
import {
  BellIcon,
  CogIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/PopOverMenu",
  component: PopoverMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: {
      description: "The title of the popover menu",
    },
    subItems: {
      description: "The menu's subItems of the popover menu",
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={{ textAlign: "center" }}>
    <PopoverMenu {...args} />
  </div>
);

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: "Popover title",
  subItems: [
    { title: "Technical Docs", href: "#" },
    { title: "Academy", href: "#" },
    { title: "Webinars", href: "#" },
    { title: "Video Tutorials", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Contact us", href: "#" },
  ],
};
