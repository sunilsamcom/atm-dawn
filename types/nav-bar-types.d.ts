declare type LeftMenuItem = {
  name: string;
  href: string;
  isActive: boolean;
}

declare type RightMenuSubItem = {
  title: string;
  href: string;
}

declare type RightMenuItem = {
  name: string;
  icon: JSX.Element;
  submenu: RightMenuSubItem[];
}
