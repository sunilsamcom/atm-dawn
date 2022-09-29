import React from "react";
import Home from "../../pages/index";
import { useSession, signIn, signOut } from "next-auth/react";

export default {
  title: "Pages/Home",
  component: Home,
};

export const HomePage = (args) => <Home />;
