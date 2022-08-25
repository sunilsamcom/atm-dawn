import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PopoverMenu from "./PopoverMenu";
import PopoverMenuSubItem from "../components/molecules/PopoverMenuSubItem";

import {
  BellIcon,
  CogIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/PopOverMenuSubItem",
  component: PopoverMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: {
      description: "The title of the popover menu",
    },
    PopoverMenuSubItem: {
      control: " ",
      description: ` <PopoverMenuSubItem/> is The subitem of the popover menu`,
    },
    icon: {
      control: " ",
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={{ textAlign: "center" }}>
    <PopoverMenu {...args}>
      <PopoverMenuSubItem menuTitle="item1" href="#" />
      <PopoverMenuSubItem menuTitle="item2" href="#" />
      <PopoverMenuSubItem menuTitle="item3" href="#" />
      <PopoverMenuSubItem menuTitle="item4" href="#" />
    </PopoverMenu>
  </div>
);

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: "Popover title",
};
