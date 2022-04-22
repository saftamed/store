import React from "react";
import { useSelector } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Loading() {
  const fetching = useSelector((state) => state.isFetching);
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={fetching}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loading;
