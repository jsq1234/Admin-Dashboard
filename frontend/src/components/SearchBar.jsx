import React from "react";
import FlexBetween from "./utilities/FlexBetween";
import { SearchIcon } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex w-full justify-end">
      <input
        placeholder="Search..."
        className="peer outline-none border-2 border-slate-200 dark:border-slate-800 bg-transparent focus:bg-slate-300 bg-slate-200 dark:focus:bg-slate-900 dark:bg-slate-800 py-1 px-2 rounded-r-none rounded-lg focus:ring-1 focus:ring-slate-400 dark:focus:ring-slate-600 w-full md:w-80 focus:w-[80%] transition-width"
      />
      <div className="border-2 border-slate-200 dark:border-slate-800 rounded-lg rounded-l-none self-stretch px-2 peer-focus:ring-1 peer-focus:ring-slate-400 dark:peer-focus:ring-slate-600 cursor-pointer">
        <SearchIcon className="h-full" />
      </div>
    </div>
  );
}
