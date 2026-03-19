import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const Register = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen lg:p-0 p-4">
      <Card className="lg:w-92 shadow-md">
        <CardHeader>
          <h3 className="text-lg font-medium">Sign Up account for Panel App</h3>
        </CardHeader>
        <CardContent className="flex justify-start items-start w-full flex-col gap-y-4 lg:mt-6 mt-4">
          <div className="flex justify-center items-center w-full gap-x-4">
            <Input placeholder="First Name" />
            <Input placeholder="Surname" />
          </div>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Select>
            <SelectTrigger className="w-full">
              Select User Type <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem>Admin</SelectItem>
                <SelectItem>Moderator</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex justify-center items-center w-full flex-col gap-y-2 lg:mt-6 mt-4 lg:mb-4 mb-2">
            <Button className="w-full" size={"lg"}>
              Sign Up
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
