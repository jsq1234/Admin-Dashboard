import {
  CalendarDays,
  Clock10,
  Home,
  Layers3,
  PanelsTopLeft,
  ScrollText,
  Shield,
  Store,
  Users2,
} from "lucide-react";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const main = [
  ["Dashboard", "/dashboard", <Home />],
  ["Customers", "/customers", <Users2 />],
  ["Products", "/products", <Store />],
  ["Transactions", "/transactions", <ScrollText />],
];

const sales = [
  ["Overview", "/overview", <PanelsTopLeft />],
  ["Daily", "/daily", <Clock10 />],
  ["Monthly", "/monthly", <CalendarDays />],
  ["Breakdown", "/breakdown", <Layers3 />],
];

const management = [["Admin", "/admin", <Shield />]];
export default function Sidebar({ sideBarOpen, toggleSideBar }) {
  useEffect(() => {
    const handleResize = () => {
      const screenSize = window.innerWidth;
      const sz = 640;
      if (screenSize <= sz) {
        toggleSideBar(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <aside
      className={`fixed left-0 top-0 mt-12 w-56 bg-slate-100 dark:bg-slate-950 border-r border-slate-400 dark:border-slate-600 opacity-80 sm:opacity-100 h-full transition-transform ease-linear ${
        sideBarOpen
          ? "translate-x-0 sm:-translate-x-full"
          : "-translate-x-full sm:translate-x-0"
      } duration-200
        flex flex-col space-y-6 p-5`}
    >
      <h1 className="block sm:hidden text-xl font-bold -mb-4">Dashboard</h1>
      <section className="flex flex-col space-y-1">
        <h1 className="text-lg font-semibold text-slate-700 dark:text-slate-300">
          Main
        </h1>
        {main.map(([title, link, logo]) => (
          <NavLink to={link}>
            {({ isActive }) => (
              <div
                className={`${
                  isActive &&
                  "font-semibold bg-slate-400 dark:bg-slate-600 translate-x-3"
                } transition-transform hover:font-semibold hover:bg-slate-400 dark:hover:bg-slate-600 hover:translate-x-3 px-2 py-1 rounded-lg flex gap-4`}
              >
                <div>{logo}</div>
                <div className="">{title}</div>
              </div>
            )}
          </NavLink>
        ))}
      </section>
      <section className="flex flex-col space-y-1">
        <h1 className="text-xl font-semibold text-slate-700 dark:text-slate-300">
          Sales
        </h1>
        {sales.map(([title, link, logo]) => (
          <NavLink to={link}>
            {({ isActive }) => (
              <div
                className={`${
                  isActive &&
                  "font-semibold bg-slate-400 dark:bg-slate-600 translate-x-3"
                } transition-transform hover:font-semibold hover:bg-slate-400 dark:hover:bg-slate-600 hover:translate-x-3 px-2 py-1 rounded-lg flex gap-4`}
              >
                <div>{logo}</div>
                <div className="">{title}</div>
              </div>
            )}
          </NavLink>
        ))}
      </section>
      <section className="flex flex-col space-y-1">
        <h1 className="text-xl font-semibold text-slate-700 dark:text-slate-300">
          Management
        </h1>
        {management.map(([title, link, logo]) => (
          <NavLink to={link}>
            {({ isActive }) => (
              <div
                className={`${
                  isActive &&
                  "font-semibold bg-slate-400 dark:bg-slate-600 translate-x-3"
                } transition-transform hover:font-semibold hover:bg-slate-400 dark:hover:bg-slate-600 hover:translate-x-3 px-2 py-1 rounded-lg flex gap-4`}
              >
                <div>{logo}</div>
                <div className="">{title}</div>
              </div>
            )}
          </NavLink>
        ))}
      </section>
    </aside>
  );
}
