"use client";

import { registerPanelUserAPI } from "@/api-helper/admin.api";
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

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState<string | null>("");

  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    setIsLoading(true);

    if (password !== confirmPassword) {
      alert("Password did not match");
      return;
    }

    try {
      await registerPanelUserAPI(
        firstName,
        lastName,
        email,
        password,
        userType!,
      );

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setUserType("");
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
          <h3 className="text-lg font-medium">Sign Up account for Panel App</h3>
        </CardHeader>
        <CardContent className="flex justify-start items-start w-full flex-col gap-y-4 lg:mt-6 mt-4">
          <div className="flex justify-center items-center w-full gap-x-4">
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Surname"
            />
          </div>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <Input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
          <Select
            value={userType}
            onValueChange={(value) => setUserType(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select User type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ADMIN">Admin</SelectItem>
              <SelectItem value="MODERATOR">Moderator</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex justify-center items-center w-full flex-col gap-y-2 lg:mt-6 mt-4 lg:mb-4 mb-2">
            <Button onClick={handleRegister} className="w-full" size={"lg"}>
              {isLoading ? <Loader2 className="animate-spin" /> : "Sign Up"}
            </Button>
            <Link href={"/auth"}>
              <h6 className="text-xs">Already have an account? Login.</h6>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
