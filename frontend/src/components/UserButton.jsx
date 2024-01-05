import { User2 } from "lucide-react";
import React, { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

export default function UserButton() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => {
    setOpen(false);
  });

  const handleClick = (event) => {
    event.stopPropagation();
    setOpen(!open);
  };

  return (
    <div className="relative">
      <User2
        className="rounded-full border-2 border-black"
        width={30}
        height={30}
        onClick={handleClick}
      />
      <div
        className={`absolute w-44 border rounded-lg border-slate-500 ${
          open ? "h-auto py-2" : "max-h-0 py-0 border-0"
        } overflow-hidden top-8 right-0 bg-slate-200 dark:bg-slate-900 transition-all ease-linear duration-400`}
      >
        <ul className="px-1" ref={dropdownRef}>
          <li className="text-md md:text-lg hover:bg-slate-300 px-2 rounded-lg dark:hover:bg-slate-800">
            UserName
          </li>
          <li className="text-md md:text-lg hover:bg-slate-300 px-2 rounded-lg dark:hover:bg-slate-800">
            Email
          </li>
          <li className="text-md md:text-lg hover:bg-slate-300 px-2 rounded-lg dark:hover:bg-slate-800">
            Sign Out
          </li>
        </ul>
      </div>
    </div>
  );
}
