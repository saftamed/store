import React, { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import {Delete,Edit} from '@material-ui/icons';
import { getUsers} from '../store/userApi';
import { useDispatch, useSelector } from 'react-redux';


const columns = [
    {
      field: "username",
      headerName: "UserName",
      width: 170,
    },
    {
        field: "email",
        headerName: "Email",
        width: 200,
    },
    
    {
        field: "isAdmin",
        headerName: "Admin",
        width: 150,

    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
      renderCell: (params) => {
        return (
           <span> {params.row.address.length}</span>
        );
      },
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 170
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="e-d d" >Edit <Edit />  </button>
            </Link>
            
            <button className='e-d w'>
            Delete
            <Delete />
            </button>
          </>
        );
      },
    },
  ];

function Users() {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        getUsers(dispatch)
    }, [])
    
  return (
    <div style={{ height: 550, width: '100%' }} className='product'>
        <h1>Users</h1>
    <DataGrid
      rows={users}
      columns={columns}
      pageSize={8}
      rowsPerPageOptions={[5,10,20]}
      getRowId={(row) => row._id}
      checkboxSelection
      disableSelectionOnClick
    />
  </div>
  )
}

export default Users