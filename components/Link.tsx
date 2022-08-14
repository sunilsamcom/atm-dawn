import NextLink from 'next/link';
import React, {HTMLAttributes} from "react";

import { UrlObject } from 'url';
declare type Url = string | UrlObject;

export default Link;

type MyLinkProps = {
  href: Url,
  children?: React.ReactNode,
  props?: HTMLAttributes<HTMLElement>[]
} & HTMLAttributes<HTMLElement>

function Link({ href, children, ...props }: React.PropsWithChildren<MyLinkProps>) {
  return (
    <NextLink href={href}>
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}
