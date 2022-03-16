import Link from "next/link";
import React from "react";

export default MyHelloComponent

// All these functions are JSX.Element components
//
import {JSX} from "@babel/types"; // This is the type import which is necessary for explicit type declarations
function MyHelloComponent({ children, ...props }: {
  children: React.ReactNode,
  props: any[]
}): JSX.Element {
  return (
    <MyHelloComponent {...props}>
      <div {...props} className="pt-32 text-sky-500 bg-slate-800 h-screen text-center">
        <h1 className="text-5xl">Hey! How are you?</h1>
        {children}
      </div>
    </MyHelloComponent>
  );
}



