import React from "react";
import { Search } from "lucide-react";
import { IconButton, TextField, InputAdornment } from "@mui/material";

import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";

import "../pages/datagrid.css";

import FlexBetween from "./utilities/FlexBetween";

const DatagridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
  return (
    <GridToolbarContainer>
      <FlexBetween className="w-full">
        <FlexBetween className="space-x-2">
          <GridToolbarColumnsButton
            sx={{
              backgroundColor: "darkgray",
              ":hover": { backgroundColor: "darkgoldenrod" },
            }}
          />
          <GridToolbarDensitySelector
            sx={{
              backgroundColor: "darkgray",
              ":hover": { backgroundColor: "darkgoldenrod" },
            }}
          />
          <GridToolbarExport
            sx={{
              backgroundColor: "darkgray",
              ":hover": { backgroundColor: "darkgoldenrod" },
            }}
          />
        </FlexBetween>
        <TextField
          label="Search..."
          sx={{ mb: "0.5rem", width: "15rem" }}
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setSearch(searchInput);
                    setSearchInput("");
                  }}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default DatagridCustomToolbar;
