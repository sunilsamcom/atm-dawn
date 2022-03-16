import Link from 'next/link';
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

export default CustomLink;

type CustomLinkProps = {
  href: string,
  children?: React.ReactNode,
  props?: (LinkProps & HTMLAttributes<HTMLElement>)[]
}

function CustomLink({ href, children, ...props }: React.PropsWithChildren<CustomLinkProps>) {
  return (
    <Link href={href}>
      <a {...props}>
        {children}
      </a>
    </Link>
  );
}
