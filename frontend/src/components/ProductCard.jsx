import React from "react";
import FlexBetween from "./utilities/FlexBetween";

export default function ProductCard({ data }) {
  return (
    <div className="border rounded-lg p-2 border-slate-400 dark:border-slate-600 flex flex-col space-y-1 shadow-md dark:shadow-slate-600 shadow-slate-400">
      <div className="text-md dark:text-yellow-500 text-yellow-600 font-semibold">
        {data?.category}
      </div>
      <FlexBetween>
        <div className="font-bold ">{data?.name}</div>
        <div className="font-bold ">{data && "$ " + data.price}</div>
      </FlexBetween>
      <div className="flex-1">{data?.description}</div>
      <div>{data?.supply}</div>
    </div>
  );
}
