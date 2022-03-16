import React from "react";

export default MyHelloComponent

// All these functions are JSX.Element components
//
import {JSX} from "@babel/types"; // This is the type import which is necessary for explicit type declarations
function MyHelloComponent({ children, ...props }: {
  children?: React.ReactNode,
  props?: any[]
}): JSX.Element {
  return (
    <div {...props}>
      <h1 className="text-5xl">Hey! How are you?</h1>
      {children}
    </div>
  );
}



