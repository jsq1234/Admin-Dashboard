import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const { mode } = useSelector((state) => state.theme);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar toggleSideBar={() => setSideBarOpen(!sideBarOpen)} />
        <Sidebar sideBarOpen={sideBarOpen} toggleSideBar={setSideBarOpen} />
        <main className="sm:ml-56 mt-12 h-full">
          <Outlet />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
