"use client";

import { User2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { useEffect, useState } from "react";
import type { FetchPanelUserProfileType } from "@/types/admin.types";
import { userAuth } from "@/hooks/use-auth";
import { fetchPanelUserProfileAPI } from "@/api-helper/admin.api";
import { formatTo12Hour } from "@/lib/format-time";

const FetchProfile = () => {
  const [data, setData] = useState<FetchPanelUserProfileType | null>(null);

  const { token, hydrate } = userAuth();

  useEffect(() => {
    const handleFetchProfile = async () => {
      if (!token) {
        setData(null);
        return;
      }

      try {
        const res = await fetchPanelUserProfileAPI(token!);
        setData(res.data.panelUser);
      } catch (error: any) {
        console.log(error.message);
        setData(null);
      } finally {
        hydrate();
      }
    };

    handleFetchProfile();
  }, [token]);

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer">
        <User2 />
      </DialogTrigger>
      <DialogContent className="lg:w-100 h-min flex justify-start items-start flex-col lg:gap-y-4">
        <h1>
          Name: {data?.first_name} {data?.last_name}
        </h1>
        <h1>Email: {data?.email}</h1>
        <h1>
          Account Status: {data?.approval_status ? "Approved" : "Pending"}
        </h1>
        <h1>
          Last Updated: {data?.created_at.split("T")[0]} at{" "}
          {formatTo12Hour(data?.created_at || "")}
        </h1>
      </DialogContent>
    </Dialog>
  );
};

export default FetchProfile;
