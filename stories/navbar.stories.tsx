import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Image from "next/image";
import { NavBar } from "./NavBar";
import useIcon from "../assets/user.png"
import {
  BellIcon,
  CogIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Navbar",
  component: NavBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    leftMenuItems: {
      control: " ",
      description: "Left side menu items in navabar",
    },
    rightMenuItems: {
      control: " ",
      description: "Right side menu items in navabar",
    },
    mainIcon: {
      control: " ",
      description: "mainIcon is prop used to set Left logo on navigation bar",
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  leftMenuItems: [
    { name: "Tracker", href: "#", isActive: false },
    { name: "Automizer", href: "#", isActive: false },
  ],
  rightMenuItems: [
    {
      name: "Notifications",
      icon: <BellIcon className="h-6 w-6" aria-hidden="true" />,
      submenu: [],
    },
    {
      name: "Support",
      icon: <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />,
      submenu: [
        { title: "Technical Docs", href: "#" },
        { title: "Academy", href: "#" },
        { title: "Webinars", href: "#" },
        { title: "Video Tutorials", href: "#" },
        { title: "Blog", href: "#" },
        { title: "Contact us", href: "#" },
      ],
    },
    {
      name: "Settings",
      icon: <CogIcon className="h-6 w-6" aria-hidden="true" />,
      submenu: [],
    },
    {
      name: "Profile",
      icon: (
        <div className="h-8 w-8">
          <Image
            src={useIcon}
            alt="Workflow"
            height="100%"
            width="100%"
          />
        </div>
      ),
      submenu: [
        { title: "Profile", href: "#" },
        { title: "Security", href: "#" },
        { title: "Key features", href: "#" },
        { title: "General settings", href: "#" },
        { title: "Give Feedback", href: "#" },
      ],
      mainIcon: (
        <div className="h-8 w-8">
          <Image
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            alt="Workflow"
            height="100%"
            width="100%"
          />
        </div>
      ),
    },
  ],
  mainIcon: (
    <div className="h-8 w-8">
      <Image
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
        alt="Workflow"
        height="100%"
        width="100%"
      />
    </div>
  ),
};
