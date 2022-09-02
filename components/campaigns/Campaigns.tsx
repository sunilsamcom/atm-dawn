import React, {HTMLAttributes} from "react";
import {LinkProps} from "next/dist/client/link";

export default Campaigns;

type CampaignsProps = {
  href: string,
  children?: React.ReactNode,
  props?: (LinkProps & HTMLAttributes<HTMLElement>)[]
}

function Campaigns({ href, children, ...props }: React.PropsWithChildren<CampaignsProps>) {
  return (
    <Campaigns href={href}>
      <a {...props}>
        {children}
      </a>
    </Campaigns>
  );
}
