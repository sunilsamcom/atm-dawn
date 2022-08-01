import React from "react";
import SimpleMenuItem from "../../atoms/SimpleMenuItem";
import PopoverMenuItem from "../../molecules/PopoverMenuItem";


type Props = {
  leftMenuItems: LeftMenuItem[]
  rightMenuItems: RightMenuItem[]
  mainIcon: JSX.Element;
}

function NavBar({mainIcon, leftMenuItems, rightMenuItems}: Props) {

  return (
    <div id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {mainIcon}
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-7">
                {leftMenuItems.map((item) => (
                  <SimpleMenuItem
                    key={item.name}
                    name={item.name}
                    href={item.href}
                    isActive={item.isActive}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-8">
              {
                rightMenuItems.map((item) => (
                  <PopoverMenuItem icon={item.icon} subItems={item.submenu} title={item.name} key={item.name}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
