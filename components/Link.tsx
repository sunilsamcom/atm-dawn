import NextLink from 'next/link';
import React, {HTMLAttributes} from "react";
import {LinkProps} from "next/dist/client/link";

// function LinkReact(Elem: React.ComponentType) {
//   Link()
// }

// export declare type MyLinkProps = LinkProps & {
//   href: Url;
//   as?: Url;
//   replace?: boolean;
//   scroll?: boolean;
//   shallow?: boolean;
//   passHref?: boolean;
//   prefetch?: boolean;
//   locale?: string | false;
// };
//
// declare function Link(props: React.PropsWithChildren<LinkProps>): React.DetailedReactHTMLElement<{
//   onMouseEnter?: React.MouseEventHandler<Element> | undefined;
//   onClick: React.MouseEventHandler;
//   href?: string | undefined;
//   ref?: any;
// }, HTMLElement>;

export default Link;

type MyLinkProps = {
  href: string,
  children?: React.ReactNode,
  className?: string,
  props?: (LinkProps & HTMLAttributes<HTMLElement>)[]
}

function Link({ href, children, className, ...props }: React.PropsWithChildren<MyLinkProps>) {
  return (
    <NextLink href={href}>
      <a className={className} {...props}>
        {children}
      </a>
    </NextLink>
  );
}
