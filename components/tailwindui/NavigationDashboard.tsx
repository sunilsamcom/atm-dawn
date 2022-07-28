/*
 * Dark nav with compact white page header
 * https://tailwindui.com/components/application-ui/application-shells/stacked
 */

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { LogoutIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react"

import {
  BellIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  LockClosedIcon,
  LightBulbIcon,
  ChatAltIcon,
} from "@heroicons/react/solid";

import Link from "components/Link";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Tracker", href: "#", current: false },
  { name: "Automizer", href: "#", current: false },
];

const userNavigation = [
  { name: "Profile", href: "#" },
  { name: "Security", href: "#" },
  { name: "Key features", href: "#" },
  { name: "General settings", href: "#" },
  { name: "Give Feedback", href: "#" },
];

const userNaviIcons = [
  { name: "<UserIcon/>" },
  { name: "<LockClosedIcon/>" },
  { name: "<LightBulbIcon/>" },
  { name: "<CogIcon/>" },
  { name: "<ChatAltIcon/>" },
];

const faqNavigation = [
  { name: "Technical Docs", href: "#" },
  { name: "Academy", href: "#" },
  { name: "Webinars", href: "#" },
  { name: "Video Tutorials", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact us", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function NavigationDashboard() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
     

        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-lg leading-6 font-semibold text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-4 sm:px-0">
              sa
              dsadas
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}
