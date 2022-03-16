import React, {ComponentProps} from "react";

// import NextPage generic type
import { NextPage } from "next";

export default MyHelloComponent

// All these functions are JSX.Element components
//
import {JSX} from "@babel/types";
/** @deprecated **/
function MyHelloComponent({ children, ...props }: {
  children?: React.ReactNode,
  title?: string,
  props?: any[]
}): JSX.Element {
  return (
    <div {...props}>
      <h1 className="text-5xl">Hey! How are you?</h1>
      {children}
    </div>
  );
}



