import {
  BellIcon,
  CogIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";
import React from "react";
import Image from "next/image";
import UserIcon from "../assets/user.png";
import {
  IconUsers,
  IconSettings as AppSettingsAltIcon,
  IconUserSearch,
  IconLock,
  IconBallBaseball,
  IconBrowserX,
  IconExchange,
  IconWebhook,
} from "@tabler/icons";

export const navigation = [
  { name: "Tracker", href: "#", isActive: false },
  { name: "Automizer", href: "#", isActive: false },
];

export const rightMenuItem = [
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

