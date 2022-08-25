import React, { useEffect, useRef, useState } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
// @ts-ignore
import { Button } from "./Button.tsx";

type MenuSubItem = {
  title: string;
  href: string;
};

type Props = {
  title: string;
  icon: JSX.Element;
  children: JSX.Element;
};

export default function PopoverMenu({ title, icon, children }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const wrapperRef = useRef(null);

  function toogleMenu() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="relative inline-block text-left">
      <div onClick={() => toogleMenu()} ref={wrapperRef}>
        <Button
          primary
          backgroundColor="#1EA7FD"
          size="medium"
          label="popover target"
        />
      </div>
      {menuOpen && (
        <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div>
            {title?.length > 0 && (
              <div
                className=" block px-5 py-2 bg-gray-100 text-gray-400 px-5 py-1.5 text-xs"
                style={{ width: "auto", height: "fit-content" }}
              >
                {title}
              </div>
            )}
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

//<PopoverMenuSubItem menuTitle={item.title} href={item.href} key={item.title}/>
