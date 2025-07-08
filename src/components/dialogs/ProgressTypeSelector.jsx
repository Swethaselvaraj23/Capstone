import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Tooltip,
} from "@mui/material";

const types = [
  {
    label: "Yes / No",
    value: "Yes/No",
    icon: "✅",
    description: "A simple yes/no response for your habit.",
  },
  {
    label: "Numeric",
    value: "Numeric",
    icon: "🔢",
    description: "Track numeric values like repetitions or counts.",
  },
  {
    label: "Timer",
    value: "Timer",
    icon: "⏱️",
    description: "Measure the time you spend on your habit.",
  },
  {
    label: "Checklist",
    value: "Checklist",
    icon: "📝",
    description: "Create a step-by-step checklist for your habit.",
  },
];

export default function ProgressTypeSelector({ open, onClose, onSelect }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>How do you want to evaluate progress?</DialogTitle>
      <DialogContent>
        <Stack
          direction="row"
          spacing={2}
          flexWrap="wrap"
          justifyContent="center"
          sx={{ mt: 2 }}
        >
          {types.map((t) => (
            <Tooltip key={t.value} title={t.description} placement="top" arrow>
              <Card
                sx={{
                  width: 160,
                  height: 160,
                  backgroundColor: "#f06292",
                  color: "#fff",
                  borderRadius: 2,
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "scale(1.08)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  },
                  cursor: "pointer",
                }}
              >
                <CardActionArea
                  onClick={() => {
                    onSelect(t.value);
                    onClose();
                  }}
                  sx={{ height: "100%" }}
                >
                  <CardContent
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="h3" align="center">
                      {t.icon}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      align="center"
                      sx={{ mt: 1 }}
                    >
                      {t.label}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Tooltip>
          ))}
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
