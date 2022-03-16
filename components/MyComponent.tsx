import Link from "next/link";
import React, {ComponentProps, HTMLAttributes, PropsWithChildren} from "react";

export default MyComponent

// All these functions are JSX.Element components
//
import {JSX} from "@babel/types"; // This is the type import which is necessary for explicit type declarations
function MyComponent({ href, children, className, props }: {
  href: string,
  children?: React.ReactNode,
  className?: string,
  props?: any[]
}): JSX.Element {
  return (
    <Link href={href}>
      <a className={className} {...props}>
        {children}
      </a>
    </Link>
  );
}
