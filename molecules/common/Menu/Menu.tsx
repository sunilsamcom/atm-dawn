import React,{useState,useEffect,useRef} from "react";


export function Menu({children,content}){

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

export function MenuItem({children}){
  return(
   <div className="block pl-5 pr-5 py-2 text-sm text-gray-500 hover:text-gray-500 hover:border-indigo-600  border-b-2">
  {children}
   </div>
  )
}

