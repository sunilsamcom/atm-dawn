import React from 'react';
import Link from "../../Link";

type Props = {
  menuTitle: string;
  href: string;
}

export default function PopoverMenuSubItem({menuTitle, href}: Props) {
  return (
    <div className="block pl-5 pr-5 py-2 text-sm text-gray-500 hover:text-gray-500 hover:border-indigo-600  border-b-2">
      <Link
        href={href}
      >
        {menuTitle}
      </Link>
    </div>
  )
}
