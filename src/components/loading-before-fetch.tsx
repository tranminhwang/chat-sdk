import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const LoadingBeforeFetchCredentails = () => {
  return (
    <div>
      <header className="px-4 py-3">
        <div className="flex gap-2 items-center">
          <Skeleton className="w-10 h-10 bg-gray-200 rounded-full" />
          <Skeleton className="w-32 h-5 bg-gray-200 rounded-xl" />
        </div>
      </header>
    </div>
  );
};

export default LoadingBeforeFetchCredentails;
