import React, {useEffect, useRef, useState} from 'react';
import {QuestionMarkCircleIcon} from "@heroicons/react/solid";
import PopoverMenuSubItem from "../components/molecules/PopoverMenuSubItem"
import {Button} from "./Button.tsx"

type MenuSubItem = {
  title: string;
  href: string;
}

type Props = {
  title: string;
  icon: JSX.Element;
  subItems: MenuSubItem[];
}

export default function PopoverMenu({title, icon, subItems}: Props) {
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
        <span className="sr-only">{title}</span>
        <Button primary backgroundColor="#1EA7FD" size="medium" label="Click on me" />
      </div>  
      {menuOpen &&
      <div
        className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div>
        {subItems.map((item) => <PopoverMenuSubItem menuTitle={item.title} href={item.href} key={item.title}/>)}
        </div>
      </div>
      }
    </div>
  )
}
