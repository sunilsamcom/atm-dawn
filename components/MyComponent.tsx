import Link from "next/link";
import React, {HTMLAttributes} from "react";

export default MyComponent

// All these functions are JSX.Element components
//
import {JSX} from "@babel/types"; // This is the type import which is necessary for explicit type declarations
/** @deprecated **/
function MyComponent({ href, children, props }: {
  href: string,
  children?: React.ReactNode
  props?: any[]
} & HTMLAttributes<HTMLElement>): JSX.Element {
  return (
    <Link href={href}>
      <a {...props}>
        {children}
      </a>
    </Link>
  );
}
