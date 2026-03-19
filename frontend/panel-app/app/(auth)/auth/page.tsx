"use client";

import { loginPanelUserAPI } from "@/api-helper/admin.api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await loginPanelUserAPI(email, password);

      setEmail("");
      setPassword("");
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen lg:p-0 p-4">
      <Card className="lg:w-92 shadow-md">
        <CardHeader>
          <h3 className="text-lg font-medium">
            Sign In with your approved account
          </h3>
        </CardHeader>
        <CardContent className="flex justify-start items-start w-full flex-col gap-y-4 lg:mt-6 mt-4">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <div className="flex justify-center items-center w-full flex-col gap-y-2 lg:mt-6 mt-4 lg:mb-4 mb-2">
            <Button onClick={handleLogin} className="w-full" size={"lg"}>
              {isLoading ? <Loader2 className="animate-spin" /> : "Sign In"}
            </Button>

            <h6 className="text-xs">Forgot account password?</h6>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
