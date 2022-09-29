import React from "react";
import { useRouter } from "next/router";
import { Tabs, Box } from "@mantine/core";
import {
  IconSettings as AppSettingsAltIcon,
  IconLock,
  IconExchange,
  IconUsers,
  IconBell,
  IconClipboardText,
  IconBellPlus,
  IconAffiliate,
  IconCoin,
  IconReportMedical,
  IconHourglassLow,
  IconUser,
  IconWorld,
  IconBrowserPlus,
} from "@tabler/icons";
import NavBar from "@app/components/organisam/NavBar";
import UserIcon from "../../assets/user.png";
import Image from "next/image";
import {
  BellIcon,
  CogIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";
import Collabration from "./tabs/Collabration";

interface WorkspaceManagementType {
  session: any;
}

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

export const settingsMenu = [
  {
    icon: <IconAffiliate color="#5987da" />,
    name: "Integrations",
    route: "integrations",
  },
  {
    icon: <IconClipboardText fill="#5987da" color="#fff" />,
    name: "Event log",
    route: "event_log",
  },
  {
    icon: <IconCoin fill="#5987da" color="#fff" />,
    name: "Custom conversions",
    route: "custom_conversions",
  },
  {
    icon: <IconBellPlus fill="#5987da" color="#fff" />,
    name: "IP/UA filtering",
    route: "ip_UA_filtering",
  },
  {
    icon: <IconReportMedical fill="#5987da" color="#fff" />,
    name: "Anti-fraud kit",
    route: "anti_fraud_kit",
  },
  {
    icon: <IconHourglassLow  color="#5987da"/>,
    name: "MTTC",
    route: "mttc",
  },
  {
    icon: <IconBell fill="#5987da" color="#fff" />,
    name: "Notifications",
    route: "notifications",
  },
];

export const settingGeneralMenu = [
  {
    icon: <AppSettingsAltIcon fill="#5987da" color="#fff" />,
    name: "General Settings",
    route: "setting",
  },
  {
    icon: <IconUser fill="#5987da" />,
    name: "Profile",
    route: "profile",
  },
  {
    icon: <IconLock fill="#5987da" color="#fff" />,
    name: "Security",
    route: "security",
  },
  {
    icon: <IconWorld fill="#5987da" color="#fff" />,
    name: "Domains",
    route: "domains",
  },
  {
    icon: <IconBrowserPlus color="#5987da" />,
    name: "Tracking URLs",
    route: "tracking_url",
  },
  {
    icon: <IconExchange color="#5987da" />,
    name: "Conversion upload",
    route: "conversion_upload",
  },
  {
    icon: <IconAffiliate fill="#5987da" />,
    name: "Redirect Webhook",
    route: "redirect_webhook",
  },
  {
    icon: <IconUsers fill="#5987da" color="#fff" />,
    name: "Collabration tools",
    route: "collabration",
  },
];

const WorkspaceManagement = ({ session }: WorkspaceManagementType) => {
  const router = useRouter();

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
        <main className="bg-state">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-center flex-wrap sm:justify-between">
              <div className="flex items-center"></div>

              <div className="flex items-center w-full flex-col md:flex-row sm: flex-wrap lg:flex-nowrap border border-t-0 border-l-0 border-r-0 border-b-1 border-b-indigo-[#e7e7ef]">
                <Box className="flex-wrap flex items-start flex-col md:flex-row">
                  <Tabs
                    value={router.query.activeTab as string}
                    defaultValue="collabration"
                    onTabChange={(value) =>
                      router.push(`/workspace-management?activeTab=${value}`)
                    }
                  >
                    <Tabs.List grow>
                      {settingGeneralMenu.map((value, index) => (
                        <Tabs.Tab
                          key={index}
                          value={value.route}
                          className={
                            (router?.query?.activeTab ?? "collabration") ===
                            value.route
                              ? "bg-[#5987da] sm:text-xs mb-1 ml-1 text-lg font-semibold hover:text-white-600 hover:bg-[#5987da] text-white-500 transform-none normal-case"
                              : "sm:text-xs mb-1 ml-1 text-lg font-semibold hover:text-white-500 hover:bg-[#5987da] text-gray-500 transform-none normal-case"
                          }
                          icon={value.icon}
                          color="red"
                        >
                          {value.name}
                        </Tabs.Tab>
                      ))}
                    </Tabs.List>
                  </Tabs>
                </Box>
              </div>
              <div className="flex items-center w-full flex-col md:flex-row sm: flex-wrap lg:flex-nowrap border border-t-0 border-l-0 border-r-0 border-b-1 border-b-indigo-[#e7e7ef]">
                <Box className="flex-wrap flex items-start flex-col md:flex-row">
                  <Tabs
                    value={router.query.activeTab as string}
                    onTabChange={(value) =>
                      router.push(`/workspace-management?activeTab=${value}`)
                    }
                    defaultValue="collabration"
                  >
                    <Tabs.List grow>
                      {settingsMenu.map((value, index) => (
                        <Tabs.Tab
                          key={index}
                          value={value.route}
                          className={
                            router.query.activeTab === value.route
                              ? "bg-[#5987da] sm:text-xs mb-1 ml-1 text-lg font-semibold hover:text-white-600 hover:border-indigo-600 text-white-500 transform-none normal-case"
                              : "sm:text-xs mb-1 ml-1 text-lg font-semibold hover:text-white-500 hover:border-indigo-600 text-gray-500 transform-none normal-case"
                          }
                          icon={value.icon}
                          color="red"
                        >
                          {value.name}
                        </Tabs.Tab>
                      ))}
                    </Tabs.List>
                  </Tabs>
                </Box>
              </div>

              <Tabs
                value={router.query.activeTab as string}
                defaultValue="collabration"
              >
                <Tabs.Panel value="collabration">
                  <Collabration />
                </Tabs.Panel>
                <Tabs.Panel value="setting">setting</Tabs.Panel>
                <Tabs.Panel value="profile">profile</Tabs.Panel>
                <Tabs.Panel value="security">security</Tabs.Panel>
                <Tabs.Panel value="domains">domains</Tabs.Panel>
                <Tabs.Panel value="tracking_url">tracking_url</Tabs.Panel>
                <Tabs.Panel value="conversion_upload">
                  conversion_upload
                </Tabs.Panel>
                <Tabs.Panel value="redirect_webhook">
                  redirect_webhook
                </Tabs.Panel>
                <Tabs.Panel value="redirect_webhook">
                  redirect_webhook
                </Tabs.Panel>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default WorkspaceManagement;
