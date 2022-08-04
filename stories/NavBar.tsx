import React from 'react';
import PropTypes from 'prop-types';
import  NavBarComponent  from "../components/organisam/NavBar/index";
import SimpleMenuItem from "../components/atoms/SimpleMenuItem";
import PopoverMenuItem from "../components/molecules/PopoverMenuItem";
import "../styles/global.css"

/**
 * Primary UI component for user interaction
 */
 export const NavBar = ({mainIcon, leftMenuItems, rightMenuItems,backgroundColor}) => {
    return (
        <div >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-between h-16" style={{backgroundColor}} >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {mainIcon}
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-7">
                    {leftMenuItems?.map((item) => (
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
                    rightMenuItems?.map((item) => (
                      <PopoverMenuItem icon={item.icon} subItems={item.submenu} title={item.name} key={item.name}/>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      )
};


// Button.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary: PropTypes.bool,
//   /**
//    * What background color to use
//    */
//   backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   /**
//    * Button contents
//    */
//   label: PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
// };

// Button.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: 'medium',
//   onClick: undefined,
// };
