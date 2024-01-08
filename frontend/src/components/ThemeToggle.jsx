import { Moon, Sun } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

export default function ThemeToggle() {
  const { mode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <button className="relative" onClick={() => dispatch(toggleTheme())}>
      <Sun
        className={`absolute transition-opacity ${
          mode === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <Moon
        className={`transition-opacity ${
          mode === "dark" ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
}
