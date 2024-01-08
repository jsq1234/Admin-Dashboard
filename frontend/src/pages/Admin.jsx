import { useGetAdminsQuery } from "../redux/api";
import { DataGrid } from "@mui/x-data-grid";
import { Loader } from "../components/utilities/Loader";
import "./datagrid.css";

const columns = [
  { field: "id", headerName: "ID", flex: 1.25, minWidth: 220 },
  { field: "name", headerName: "Name", flex: 1, minWidth: 180 },
  { field: "email", headerName: "Email", flex: 1, minWidth: 200 },
  { field: "phoneNumber", headerName: "Phone Number", flex: 1, minWidth: 120 },
];

export default function Customers() {
  const { isFetching, error, data } = useGetAdminsQuery();
  console.log(data);
  return (
    <div className="p-4 h-96">
      <h1 className="mb-5 text-3xl font-semibold">Admin</h1>
      <Loader isFetching={isFetching} className="h-96" />
      {data && (
        <div className="w-full h-[30rem] datagrid-container">
          <DataGrid rows={data} columns={columns} />
        </div>
      )}
    </div>
  );
}
