import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  {NavBar}  from "./NavBar";
import {BellIcon, CogIcon, QuestionMarkCircleIcon,} from "@heroicons/react/solid";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/Navbar',
  component: NavBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    leftMenuItems:{ control:' ',description:"Left side menu items in navabar"},
    rightMenuItems:{ control:' ',description:"Right side menu items in navabar"},
    mainIcon:{ control:' ',description:"mainIcon is prop used to set Left logo on navigation bar"},
    
  },
} ;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    leftMenuItems: [
      {name: "Tracker", href: "#", isActive: false},
      {name: "Automizer", href: "#", isActive: false},
    ],
  rightMenuItems:[
      {
        name: "Notifications",
        icon: <BellIcon className="h-6 w-6" aria-hidden="true"/>,
        submenu: [],
      },
      {
        name: "Support",
        icon: <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true"/>,
        submenu: [{title: "Technical Docs", href: "#"},
          {title: "Academy", href: "#"},
          {title: "Webinars", href: "#"},
          {title: "Video Tutorials", href: "#"},
          {title: "Blog", href: "#"},
          {title: "Contact us", href: "#"},],
      },
      {
        name: "Settings",
        icon: <CogIcon className="h-6 w-6" aria-hidden="true"/>,
        submenu: []
      },
      {
        name: "Profile",
        icon: <img
          className="h-8 w-8 rounded-full cursor-pointer"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Workflow"
        />,
        submenu: [
          {title: "Profile", href: "#"},
          {title: "Security", href: "#"},
          {title: "Key features", href: "#"},
          {title: "General settings", href: "#"},
          {title: "Give Feedback", href: "#"},
        ],
        mainIcon:<img
          className="h-8 w-8"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
          alt="Workflow"
            />,
      }
    ],
    mainIcon:<img
    className="h-8 w-8"
    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
    alt="Workflow"
  />
}