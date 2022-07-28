import React,{useState,useEffect,useRef} from "react";
import Link from "components/Link";
import {
    BellIcon,
    CogIcon,
    QuestionMarkCircleIcon,
    UserIcon,
    LockClosedIcon,
    LightBulbIcon,
    ChatAltIcon,
  } from "@heroicons/react/solid";
import { LogoutIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react"


function Menu({children,content}){
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


    return(
        <div className="relative inline-block text-left" >
        <div onClick={()=>toogleMenu()} ref={wrapperRef}>
        {children}
        </div>
        { menuOpen &&
        <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div>
            {content}
            </div>
        </div>    
        }
        </div>
    )
}  

// function MenuItem({children}){
//     <div className=">
//           <Link
//             href="#"
//             className="block px-5 py-2 text-sm text-gray-500"  
//            >
//             Profile
//            </Link>
//     </div>
// }



function NavBar(){


    const navigationLeftItems = [
        { name: "Tracker", href: "#", current: false },
        { name: "Automizer", href: "#", current: false },
      ];

      function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
      }

    return(
        <div id="navbar">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
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
                    {navigationLeftItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'border-b-2 border-indigo-600 '
                                : '',
                              `text-sm uppercase tracking-widest text-gray-500 font-semibold border-white border-b-2 pb-2 mt-2 hover:text-indigo-600 hover:border-indigo-600
                              focus:text-indigo-600 focus:border-indigo-600`
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                    </div>
                    </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6 space-x-8">
                            <div className="space-x-8 flex">
                              <button
                                type="button"
                                className="p-1 rounded-full text-gray-600 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                              >
                                <span className="sr-only">View notifications</span>
                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                                <Menu
                                content = {
                                    <div>
                                    <div className="bg-gray-100 text-gray-400 px-5 py-1.5 text-xs">
                                    Support
                                    </div>
                                    <Link
                                    href="#"
                                    className="block pl-5 py-2 text-sm text-gray-500 hover:text-gray-500 hover:border-indigo-600 "  
                                  >
                                    Technical Docs
                                  </Link>
                                  <Link
                                    href="#"
                                    className="block px-5 py-2 text-sm text-gray-500 hover:text-gray-500 hover:border-indigo-600"  
                                  >
                                    Academy
                                  </Link>
                                  <Link
                                    href="#"
                                    className="block px-5 py-2 text-sm text-gray-500 hover:text-gray-500 hover:border-indigo-600"  
                                  >
                                    Webinars
                                  </Link>
                                  <Link
                                    href="#"
                                    className="block px-5 py-2 text-sm text-gray-500 hover:text-gray-500 hover:border-indigo-600"  
                                  >
                                    Video Tutorials
                                  </Link>
                                  <Link
                                    href="#"
                                    className="block px-5 py-2 text-sm text-gray-500 hover:text-gray-500 hover:border-indigo-600"  
                                  >
                                    Blog    
                                  </Link>
                                  <Link
                                    href="#"
                                    className="block px-5 py-2 text-sm text-gray-500 hover:text-gray-500 hover:border-indigo-600"  
                                  >
                                    Contact us    
                                  </Link>
                                    </div>
                                }
                                >
                                                               <button
                                type="button"
                                className="p-1 rounded-full text-gray-600 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                              >
                                <span className="sr-only">View notifications</span>
                                <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                                </Menu>  

                                <button
                                type="button"
                                className="p-1 rounded-full text-gray-600 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                >
                                <span className="sr-only">View notifications</span>
                                <CogIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/*menuItem*/}
                                <Menu
                                content = {
                                    <>
                                    <div className="bg-gray-100 text-gray-400 px-5 py-1.5 text-xs">
                                    Account: Worker
                                    </div>
                                    <Link
                                    href="#"
                                    className="block px-5 py-2 text-sm text-gray-500 hover:text-gray-500 hover:border-indigo-600"  
                                  >
                                    Profile
                                  </Link>
                                  <Link
                                    href="#"
                                    className="block px-5 py-2 text-sm text-gray-500 hover:text-gray-500 hover:border-indigo-600"  
                                  >
                                    Security
                                  </Link>
                                  <Link
                                    href="#"
                                    className="block px-5 py-2 text-sm text-gray-500 hover:text-gray-500 hover:border-indigo-600"  
                                  >
                                    Key features
                                  </Link>
                                  <Link
                                    href="#"
                                    className="block px-5 py-2 text-sm text-gray-500 hover:text-gray-500 hover:border-indigo-600"  
                                  >
                                    General settings
                                  </Link>
                                  <Link
                                    href="#"
                                    className="block px-5 py-2 text-sm text-gray-500 hover:text-gray-500 hover:border-indigo-600"  
                                  >
                                    Give Feedback
                                  </Link>
                                  <Link
                                    href="/pages/page-1"
                                    className="flex bg-gray-100 text-gray-400 text-right pl-28 py-1 text-xs"
                                    >
                                    <LogoutIcon className="w-5 h-5 mr-1 text-gray-400" />
                                    <label className="text-gray-400 cursor-pointer" onClick={()=>signOut()}>SignOut</label>
                                    </Link>
                                    </>
                                }
                                >
                                <img
                                    className="h-8 w-8 rounded-full cursor-pointer"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="Workflow"
                                    />
                                </Menu>                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;