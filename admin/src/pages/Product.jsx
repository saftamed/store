import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { TextField } from "@material-ui/core";
import { MenuItem, Box } from "@mui/material";
import { AddCircleOutline,DeleteForever } from "@material-ui/icons";
import IconButton from "@mui/material/IconButton";
function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [alignment, setAlignment] = React.useState(0);

  const setTextHan =(e) =>{

        setProduct({...product,
            [e.target.name]:e.target.value})
   
  }

  
  const handleChange = (e) => {
    setAlignment(e.target.value);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/product/find/${id}`)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      });
  }, [id]);

  return (
    product && (
      <>
        <h1>{product.title}</h1>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="product-info">
          <div>
              <img src={product.img} />
              <div className="file-input">
                <input
                  type="file"
                  name="file-input"
                  id="file-input"
                  className="file-input__input"
                />
                <label className="file-input__label" htmlFor="file-input">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="upload"
                    className="svg-inline--fa fa-upload fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                    ></path>
                  </svg>
                  <span>Upload file</span>
                </label>
              </div>
            </div>
            <div className="left">
              <TextField
                required
                fullWidth
                label="Title"
                variant="outlined"
                defaultValue={product.title}
                name="title"
                onChange={(e) => setTextHan(e)}
              />
              <TextField
                label="Description"
                multiline
                fullWidth
                variant="outlined"
                name="desc"
                minRows={4}
                onChange={(e) => setTextHan(e)}
                defaultValue={product.desc}
              />
              <TextField
                required
                label="Categories"
                variant="outlined"
                fullWidth
                defaultValue={product.categories.join(";")}
                name="categories"
                onChange={(e) =>  setProduct({...product,[e.target.name]:e.target.value.split(";")})}
              />
              <TextField
                required
                label="Price"
                fullWidth
                variant="outlined"
                name="price"
                defaultValue={product.price}
                onChange={(e) => setTextHan(e,true)}
              />
            </div>
            <div className="right">
              <TextField
                select
                label="Optins"
                value={alignment}
                onChange={handleChange}
              >
                <MenuItem key={0} value={0}>
                  Colors
                </MenuItem>
                <MenuItem key={1} value={1}>
                  Colors And Sizes
                </MenuItem>
                <MenuItem key={2} value={2}>
                  Other Options
                </MenuItem>
              </TextField>
              <div className="colors">
                <TextField select label="Colors" value={alignment}>
                  {product.colors.map((c, ii) => (
                    <MenuItem key={c.name} value={ii}>
                      {c.name}
                    </MenuItem>
                  ))}
                </TextField>
                <IconButton aria-label="delete" size="large">
                  <AddCircleOutline />
                </IconButton>
              </div>
              <div className="sizes">
                  <div className="colors">
                <TextField
                  label="Name"
                  defaultValue="Red"
                  size="small"
                />

<IconButton aria-label="delete" size="large">
                  <DeleteForever />
                </IconButton>
                  </div>
                <TextField label="S" defaultValue="5" size="small" />
                <TextField label="M" defaultValue="5" size="small" />
                <TextField label="L" defaultValue="5" size="small" />
                <TextField label="XL" defaultValue="5" size="small" />
                <TextField label="2XL" defaultValue="5" size="small" />
              </div>
            </div>


          </div>
        </Box>
      </>
    )
  );
}

export default Product;
