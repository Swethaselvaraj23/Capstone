import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function FloatingActionButton({ onClick }) {
  return (
    <Fab
      color="secondary"
      onClick={onClick}
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        bgcolor: "#f06292",
      }}
    >
      <AddIcon />
    </Fab>
  );
}
