import { render, screen, prettyDOM } from "@testing-library/react";
import console from "console";
import NavBar from "../components/organisam/NavBar";
import Image from 'next/image'
import {
  BellIcon,
  CogIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";

const leftMenuItems = [
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
      <Image
        className="h-8 w-8 rounded-full cursor-pointer"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="Workflow"
      />
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

// it('navbar component test',async()=>{
//     const renderer = render(<NavBar leftMenuItems={leftMenuItems} rightMenuItems={rightMenuItem}/>)
//     console.log(prettyDOM(renderer.container.firstChild))
// })

describe("NavBar", () => {
  test("test left menu items navbar items", () => {
    const renderer = render(
      <NavBar leftMenuItems={leftMenuItems} rightMenuItems={rightMenuItem} />
    );
    console.log(prettyDOM(renderer.container.firstChild));

    leftMenuItems.forEach((item) => {
      console.log("item name", item.name);
      const menuname = item.name;
      expect(screen.getByText(`${item.name}`)).toBeInTheDocument();
    });
  });

  test("test right menu items navbar items", () => {
    const renderer = render(
      <NavBar leftMenuItems={leftMenuItems} rightMenuItems={rightMenuItem} />
    );
    // console.log(prettyDOM(renderer.container.firstChild))

    rightMenuItem.forEach((item) => {
      // console.log("item name",item.name)
      const regex = item.name;
      const button = screen.getByRole("button", {
        name: regex,
      });

      expect(button).toBeInTheDocument();
    });
  });

  // test('Logo must have src = "/logo.svg" and alt = "Logo"', () => {
  //   const renderer = render(<NavBar leftMenuItems={leftMenuItems} rightMenuItems={rightMenuItem}

  //     mainIcon={<img
  //       className="h-8 w-8"
  //       src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
  //       alt="logo"
  //     />}
  //   />)

  //   logoImage = <img
  //   className="h-8 w-8"
  //   src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
  //   alt="logo"
  // />

  //   const logo = shallow(<img
  //     className="h-8 w-8"
  //     src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
  //     alt="logo"
  //   />);

  //   expect(logo.find("img").prop("src")).toEqual(logoImage);
  // });
});
