import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Delete, Edit } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import axios from "axios";
const columns = [
  {
    field: "_id",
    headerName: "ID",
    width: 220,
  },

  {
    field: "email",
    headerName: "Email",
    width: 200,
    editable: true,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
  },
];
function NewsSub() {
  const dispatch = useDispatch();
  const [subs, setSubs] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/news`).then((response) => {
      setSubs(response.data);
    });
  }, []);
  return (
    <div style={{ height: 550, width: "100%" }} className="product">
      <h1>Subscribers To The News Letter</h1>
      <DataGrid
        rows={subs}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5, 10, 20]}
        getRowId={(row) => row._id}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default NewsSub;
