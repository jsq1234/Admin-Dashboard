import { Typography, Box, useTheme } from "@mui/material";
import React from "react";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box>
      <div className="text-black text-3xl dark:text-slate-200 font-bold">
        {title}
      </div>
      <div className="text-black text-lg dark:text-slate-300">{subtitle}</div>
    </Box>
  );
};

export default Header;
