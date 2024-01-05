import React from "react";
import { useGetCustomersQuery } from "../redux/api";
import { DataGrid } from "@mui/x-data-grid";
import { Loader2Icon } from "lucide-react";
import { Loader } from "../components/utilities/Loader";

const columns = [
  { field: "name", headerName: "Name", width: 140 },
  { field: "email", headerName: "Email", width: 60 },
];
export default function Customers() {
  const { isFetching, error, data } = useGetCustomersQuery();
  console.log(isFetching);
  return (
    <div className="p-4 h-96">
      <h1 className="mb-5 text-3xl font-semibold">Customers</h1>
      <Loader isFetching={isFetching} className="h-96" />
    </div>
  );
}
