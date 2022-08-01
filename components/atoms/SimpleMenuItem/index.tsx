import React from 'react';
import Link from "../../Link";

type Props = {
  name: string;
  href: string;
  isActive: boolean;
}

export default function SimpleMenuItem({name, href, isActive}: Props) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return <Link
    key={name}
    href={href}
    className={classNames(
      isActive
        ? 'border-b-2 border-indigo-600 '
        : '',
      `text-sm uppercase tracking-widest text-gray-500 font-semibold border-white border-b-2 pb-2 mt-2 hover:text-indigo-600 hover:border-indigo-600
                               focus:text-indigo-600 focus:border-indigo-600`
    )}
    aria-current={isActive ? 'page' : undefined}
  >
    {name}
  </Link>
}
