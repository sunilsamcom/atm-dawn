import * as React from "react";
import { Divider } from '@mantine/core';
import { Menu, Button, Text } from '@mantine/core';



type MenuComponentProps = {
  toggle?: React.ReactNode;
  toggleBtn?: React.ReactNode;
  btnProps?: any;
  options?: any[];
  buttonColor?:any;
};
export default MenuComponent;
function MenuComponent({buttonColor, options, toggle}: MenuComponentProps) {
  return (
    <div>
      <Menu
        id="demo-customized-button"
      >
        <Menu.Target>
          <Button className={buttonColor}>{toggle}</Button>
        </Menu.Target>
        <Menu.Dropdown>
          {options?.map((item: any, key) => {
            const { type, label, value, ...props } = item;
            return (
              <Menu.Item key={key} value={value} {...props}>
                {label}
              </Menu.Item>
            );
          })}
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
