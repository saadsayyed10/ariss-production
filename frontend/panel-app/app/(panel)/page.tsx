"use client";

import { userAuth } from "@/hooks/use-auth";

const Dashboard = () => {
  const { token } = userAuth();

  return (
    <div>
      <p>{token ? token : "Dashboard"}</p>
    </div>
  );
};

export default Dashboard;
