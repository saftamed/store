import React, { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import {Delete,Edit} from '@material-ui/icons';
import { getProducts } from '../store/userApi';
import { useDispatch, useSelector } from 'react-redux';


const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    {
      field: "title",
      headerName: "Title",
      width: 200,
    },
    {
        field: "desc",
        headerName: "Description",
        width: 200,
    },
    
    {
        field: "img",
        headerName: "Image",
        width: 150,
        renderCell: (data) => {
            return <img src={data.row.img} alt="img" style={{ width: '100px', height: '100px' }} />
        }

    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
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

function Products() {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    useEffect(() => {
        getProducts(dispatch)
    }, [])
    
  return (
    <div style={{ height: 550, width: '100%' }} className='product'>
        <h1>Products</h1>
    <DataGrid
      rows={products}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[5,10,20]}
      getRowId={(row) => row._id}
      checkboxSelection
      disableSelectionOnClick
    />
  </div>
  )
}

export default Products