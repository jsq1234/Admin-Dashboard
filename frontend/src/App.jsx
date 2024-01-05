import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <Navbar toggleSideBar={() => setSideBarOpen(!sideBarOpen)} />
      <Sidebar sideBarOpen={sideBarOpen} toggleSideBar={setSideBarOpen} />
      <main className="sm:ml-56 mt-12 h-full">
        <Outlet />
      </main>
    </>
  );
}

export default App;
