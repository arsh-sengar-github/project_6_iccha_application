import Link from "next/link";
import { StepForward } from "lucide-react";

const TopBar = () => {
  return (
    <div className="fixed left-0 top-0 shadow-md p-4 w-full flex justify-between items-center bg-gray-200 md:px-32 md:py-8">
      <Link href="/">
        <h1 className="uppercase text-4xl text-primary font-bold">Ichha</h1>
      </Link>
      <Link
        className="flex items-center gap-1 text-gray-500 hover:text-primary hover:underline"
        href="/"
      >
        Where Ideas are Named
        <StepForward />
      </Link>
    </div>
  );
};

export default TopBar;
