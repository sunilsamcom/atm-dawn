import React, {useEffect, useRef, useState} from 'react';
import PopoverMenuSubItem from "../PopoverMenuSubItem";

type Props = {
  title: string;
  icon: JSX.Element;
  subItems: RightMenuSubItem[];
}

export default function PopoverMenuItem({icon, subItems, title}: Props) {

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
      <div className="space-x-8 flex" onClick={() => toogleMenu()} ref={wrapperRef}>
        <button
          type="button"
          className="p-1 rounded-full text-gray-600 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          {icon}
        </button>
        {
          menuOpen && subItems.length > 0 && (
            <div
              className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div style={{width: "max-content"}}>
                <div className=" block px-5 py-2 bg-gray-100 text-gray-400 px-5 py-1.5 text-xs">
                  {title}
                </div>
                {subItems.map((item) => <PopoverMenuSubItem menuTitle={item.title} href={item.href} key={item.title}/>)}
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
