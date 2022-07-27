/*
 * Dark nav with compact white page header
 * https://tailwindui.com/components/application-ui/application-shells/stacked
 */

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { LogoutIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
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
  { name: "Dashboard", href: "", current: true },
  { name: "Page 1", href: "/pages/page-1", current: false },
  { name: "Page 2", href: "/pages/page-2", current: false },
  { name: "Page 3", href: "/pages/page-3", current: false },
  { name: "Page 4", href: "/pages/page-4", current: false },
  { name: "Page 5", href: "/pages/page-5", current: false },
  { name: "Reports", href: "#", current: false },
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
        <Disclosure as="nav" className="bg-white-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-7">
                        <Link
                          href="https://github.com/"
                          className="text-sm uppercase tracking-widest text-gray-500 font-semibold border-white border-b-2 pb-2 mt-2 hover:text-indigo-600 hover:border-indigo-600
                         focus:text-indigo-600 focus:border-indigo-600"
                        >
                          Tracker
                        </Link>
                        <Link
                          href="https://github.com/"
                          className="text-sm uppercase tracking-widest text-gray-500 font-semibold border-white border-b-2 pb-2 mt-2 hover:text-indigo-600 hover:border-indigo-600
                         focus:text-indigo-600 focus:border-indigo-600"
                        >
                          Automizer
                        </Link>
                        {/* {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))} */}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6 space-x-8">
                      {/* icons of menu */}
                      <div className="space-x-8 flex">
                        <button
                          type="button"
                          className="p-1 rounded-full text-gray-600 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        <Menu as="div">
                          <div>
                            <Menu.Button className="p-1 rounded-full text-gray-600 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                              {/* <span className="sr-only">Open user menu</span> */}
                              {/* <button
                                type="button"
                                className="p-1 rounded-full text-gray-600 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                              > */}
                              <span className="sr-only">View faq</span>
                              <QuestionMarkCircleIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                              {/* </button> */}
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-left divide-y divide-gray-100 absolute right-[80px] mt-2 w-48 shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <label className="bg-gray-100 text-gray-400 pl-5 pr-[130px] py-1.5 w-[200px] text-xs">
                                Support
                              </label>
                              {faqNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <Link
                                      href={item.href}
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 hover:text-gray-500"
                                          : "",
                                        "block px-5 py-2 text-sm text-gray-500"
                                      )}
                                    >
                                      {item.name}
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>

                        <button
                          type="button"
                          className="p-1 rounded-full text-gray-600 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                          <span className="sr-only">View notifications</span>
                          <CogIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right divide-y divide-gray-100 absolute right-0 mt-2 w-48 shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <label className="bg-gray-100 text-gray-400 pl-5 pr-[84px] py-1.5 text-xs">
                              Account: Worker
                            </label>
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    href={item.href}
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 hover:text-gray-500"
                                        : "",
                                      "block px-5 py-2 text-sm text-gray-500"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                            <Link
                              href="/pages/page-1"
                              className="flex bg-gray-100 text-gray-400 text-right pl-28 py-1 text-xs"
                            >
                              <LogoutIcon className="w-5 h-5 mr-1 text-gray-400" />
                              <label className="text-gray-400">SignOut</label>
                            </Link>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <div className="ml-10 flex items-baseline space-x-7">
                    <Link
                      href="https://github.com/"
                      className="text-sm uppercase tracking-widest text-gray-500 font-semibold border-white border-b-2 pb-2 mt-2 hover:text-indigo-600 hover:border-indigo-600
                         focus:text-indigo-600 focus:border-indigo-600"
                    >
                      Tracker
                    </Link>
                    <Link
                      href="https://github.com/"
                      className="text-sm uppercase tracking-widest text-gray-500 font-semibold border-white border-b-2 pb-2 mt-2 hover:text-indigo-600 hover:border-indigo-600
                         focus:text-indigo-600 focus:border-indigo-600"
                    >
                      Automizer
                    </Link>
                  </div>
                  {/* {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))} */}
                </div>

                {/* icons of menu */}
                <div className="space-x-8 flex justify-center">
                  <button
                    type="button"
                    className="p-1 rounded-full text-gray-600 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    className="p-1 rounded-full text-gray-600 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    className="p-1 rounded-full text-gray-600 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <CogIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div>
                  <div className="mt-3 px-2 space-y-1">
                    {faqNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    {/* <button
                      type="button"
                      className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button> */}
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

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
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}
