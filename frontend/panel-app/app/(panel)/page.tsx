"use client";

import FetchProfile from "@/components/custom/FetchProfile";
import { Button } from "@/components/ui/button";
import { userAuth } from "@/hooks/use-auth";
import { useEffect } from "react";

const Dashboard = () => {
  const { token, logout, hydrate } = userAuth();

  useEffect(() => {
    hydrate();
  }, []);

  return (
    <div className="flex justify-center items-center w-full flex-col">
      <Button onClick={() => logout()}>Logout</Button>
      <h6 className="w-20 truncate">{token && token}</h6>
      <FetchProfile />
    </div>
  );
};

export default Dashboard;
