import { Loader2Icon } from "lucide-react";
import React from "react";

export const Loader = ({ isFetching, classname }) => {
  return (
    isFetching && (
      <div
        className={`text-center p-2 h-full flex items-center justify-center ${classname}`}
      >
        <Loader2Icon
          width={72}
          height={72}
          strokeWidth={1}
          className="animate-spin"
        />
      </div>
    )
  );
};
