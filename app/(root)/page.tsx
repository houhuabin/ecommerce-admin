import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="p-4">
      <Button>Click me</Button>
      <div className="h-screen">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
export default SetupPage;
