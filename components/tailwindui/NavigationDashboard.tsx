/*
 * Dark nav with compact white page header
 * https://tailwindui.com/components/application-ui/application-shells/stacked
 */

/* This example requires Tailwind CSS v2.0+ */
import React from "react";

import {
  BellIcon,
  CogIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";
import NavBar from "../organisam/NavBar";
import UserIcon from "../../assets/user.png";
import Image from "next/image";

const navigation = [
  { name: "Tracker", href: "#", isActive: false },
  { name: "Automizer", href: "#", isActive: false },
];

const rightMenuItem = [
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
      <div className="h-8 w-8 rounded-full cursor-pointer">
        <Image src={UserIcon} alt="userprofileicon" />
      </div>
    ),
    submenu: [
      { title: "Profile", href: "#" },
      { title: "Security", href: "#" },
      { title: "Key features", href: "#" },
      { title: "General settings", href: "#" },
      { title: "Give Feedback", href: "#" },
    ],
  },
];

export default function NavigationDashboard() {
  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow-sm">
          <NavBar
            leftMenuItems={navigation}
            rightMenuItems={rightMenuItem}
            mainIcon={
              <div className="h-8 w-8">
                <Image
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                  height="100%"
                  width="100%"
                />
              </div>
            }
          />
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-4 sm:px-0">
              Dashboard
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}
