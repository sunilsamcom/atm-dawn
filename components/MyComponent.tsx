import Link from "next/link";
import React from "react";

export default MyComponent

// All these functions are JSX.Element components
//
import {JSX} from "@babel/types"; // This is the type import which is necessary for explicit type declarations
function MyComponent({ href, children, ...props }: {
  href?: string,
  children?: React.ReactNode,
  props?: any[]
}): JSX.Element {
  return (
    <Link href={href}>
      <a {...props}>
        {children}
      </a>
    </Link>
  );
}
