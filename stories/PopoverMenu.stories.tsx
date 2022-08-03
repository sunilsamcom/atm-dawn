import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  PopoverMenu  from "./PopoverMenu";
import {BellIcon, CogIcon, QuestionMarkCircleIcon,} from "@heroicons/react/solid";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/PopOverMenu',
  component: PopoverMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} ;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PopoverMenu {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    icon:'Popover title',
    subItems:[{title: "Technical Docs", href: "#"},
    {title: "Academy", href: "#"},
    {title: "Webinars", href: "#"},
    {title: "Video Tutorials", href: "#"},
    {title: "Blog", href: "#"},
    {title: "Contact us", href: "#"},]
}