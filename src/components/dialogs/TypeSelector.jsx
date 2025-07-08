import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function TypeSelector({ open, onClose, onSelect }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle
        sx={{
          bgcolor: "#000",
          color: "#f06292",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Select Type</Typography>
        <IconButton onClick={onClose} sx={{ color: "#fff" }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          bgcolor: "#121212",
          color: "#fff",
          py: 4,
        }}
      >
        <Stack spacing={2}>
          <Button
            fullWidth
            variant="contained"
            sx={{ bgcolor: "#f06292", "&:hover": { bgcolor: "#e91e63" } }}
            onClick={() => onSelect("habit")}
          >
            Habit
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{ bgcolor: "#7C4DFF", "&:hover": { bgcolor: "#651fff" } }}
            onClick={() => onSelect("recurringTask")}
          >
            Recurring Task
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{ bgcolor: "#00BFA5", "&:hover": { bgcolor: "#009e8f" } }}
            onClick={() => onSelect("task")}
          >
            Task
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
