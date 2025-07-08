import React, { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HabitDialogFlow from "../pages/HabitDialogFlow";

export default function GlobalFAB({ show = true }) {
  const [open, setOpen] = useState(false);

  if (!show) return null;

  return (
    <>
      <Fab
        color="secondary"
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1200,
          bgcolor: "#f06292",
          "&:hover": {
            bgcolor: "#ec407a",
          },
        }}
      >
        <AddIcon />
      </Fab>

      <HabitDialogFlow
        open={open}
        onClose={() => setOpen(false)}
        onSave={(habitData) => {
          console.log("Saved habit:", habitData);
          setOpen(false);
        }}
      />
    </>
  );
}
