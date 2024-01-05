import {
  Bell,
  LayoutDashboard,
  MenuIcon,
  MessageSquare,
  Settings,
  User2,
} from "lucide-react";
import FlexBetween from "./utilities/FlexBetween";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import UserButton from "./UserButton";

export default function Navbar({ toggleSideBar }) {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full py-2 border-b border-slate-500 dark:border-slate-600 bg-slate-100 dark:bg-slate-950 ">
        <FlexBetween className="px-2 sm:px-4 space-x-4">
          <FlexBetween className="space-x-2">
            <button
              className="block sm:hidden hover:bg-slate-200 p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 dark:hover:bg-slate-800 dark:focus:ring-slate-500"
              onClick={toggleSideBar}
            >
              <MenuIcon />
            </button>
            <LayoutDashboard width={31} height={31} />
            <h1 className="text-2xl font-bold hidden sm:block">Dashboard</h1>
          </FlexBetween>
          <SearchBar />
          <FlexBetween className="sm:space-x-4 space-x-2">
            <Settings />
            <ThemeToggle />
            <UserButton />
          </FlexBetween>
        </FlexBetween>
      </nav>
    </>
  );
}
