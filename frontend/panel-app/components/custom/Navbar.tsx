"use client";

import { userAuth } from "@/hooks/use-auth";
import { LogOut } from "lucide-react";
import { useEffect } from "react";
import FetchProfile from "./FetchProfile";

const Navbar = () => {
  const { token, logout, hydrate } = userAuth();

  useEffect(() => {
    hydrate();
  }, [token]);

  return (
    <div className="flex justify-between items-center w-full lg:px-10 lg:py-6">
      <h1 className="lg:text-3xl">ARISS</h1>
      <div className="flex justify-end items-start w-full lg:gap-x-4">
        <FetchProfile />
        <LogOut className="cursor-pointer" onClick={() => logout()} />
      </div>
    </div>
  );
};

export default Navbar;
