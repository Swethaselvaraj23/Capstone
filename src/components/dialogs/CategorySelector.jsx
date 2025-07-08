import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Button,
  TextField,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const initialCategories = [
  { label: "Quit a bad habit", value: "bad_habit", color: "#e53935", icon: "🚫" },
  { label: "Art", value: "art", color: "#d81b60", icon: "🎨" },
  { label: "Meditation", value: "meditation", color: "#8e24aa", icon: "🧘" },
  { label: "Study", value: "study", color: "#5e35b1", icon: "🎓" },
  { label: "Sports", value: "sports", color: "#3949ab", icon: "🚴" },
  { label: "Entertainment", value: "entertainment", color: "#00838f", icon: "🎟️" },
  { label: "Social", value: "social", color: "#00897b", icon: "💬" },
  { label: "Finance", value: "finance", color: "#43a047", icon: "💵" },
  { label: "Health", value: "health", color: "#7cb342", icon: "➕" },
  { label: "Work", value: "work", color: "#c0ca33", icon: "💼" },
  { label: "Nutrition", value: "nutrition", color: "#f9a825", icon: "🍽️" },
  { label: "Home", value: "home", color: "#fb8c00", icon: "🏠" },
  { label: "Outdoor", value: "outdoor", color: "#f4511e", icon: "⛰️" },
  { label: "Other", value: "other", color: "#d84315", icon: "🎁" },
];

export default function CategorySelector({ open, onClose, onSelect }) {
  const [categories, setCategories] = useState(initialCategories);
  const [customOpen, setCustomOpen] = useState(false);
  const [customLabel, setCustomLabel] = useState("");
  const [customColor, setCustomColor] = useState("#f06292");
  const [customIcon, setCustomIcon] = useState("🔖");

  const handleCreateCategory = () => {
    const newCategory = {
      label: customLabel,
      value: customLabel.toLowerCase().replace(/\s+/g, "_"),
      color: customColor,
      icon: customIcon,
    };
    setCategories([...categories, newCategory]);
    onSelect(newCategory);
    setCustomOpen(false);
    setCustomLabel("");
    setCustomColor("#f06292");
    setCustomIcon("🔖");
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>Select a category for your habit</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {categories.map((cat) => (
              <Grid item xs={6} sm={4} key={cat.value}>
                <Card
                  sx={{
                    backgroundColor: "#222",
                    color: cat.color,
                    height: "100%",
                  }}
                >
                  <CardActionArea
                    onClick={() => {
                      onSelect(cat);
                      onClose();
                    }}
                  >
                    <CardContent>
                      <Typography variant="h3" align="center">
                        {cat.icon}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        align="center"
                        color="#fff"
                      >
                        {cat.label}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}

            {/* Create Category Button */}
            <Grid item xs={6} sm={4}>
              <Card
                sx={{
                  backgroundColor: "#444",
                  color: "#fff",
                  height: "100%",
                }}
              >
                <CardActionArea
                  onClick={() => setCustomOpen(true)}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 80,
                      }}
                    >
                      <AddIcon sx={{ fontSize: 40 }} />
                    </Box>
                    <Typography
                      variant="subtitle1"
                      align="center"
                    >
                      Create category
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

      {/* Custom Category Dialog */}
      <Dialog
        open={customOpen}
        onClose={() => setCustomOpen(false)}
      >
        <DialogTitle>Create Custom Category</DialogTitle>
        <DialogContent>
          <TextField
            label="Category name"
            fullWidth
            value={customLabel}
            onChange={(e) => setCustomLabel(e.target.value)}
            sx={{ mt: 2 }}
          />
          <TextField
            label="Emoji icon"
            fullWidth
            value={customIcon}
            onChange={(e) => setCustomIcon(e.target.value)}
            sx={{ mt: 2 }}
          />
          <TextField
            label="Color"
            type="color"
            fullWidth
            value={customColor}
            onChange={(e) => setCustomColor(e.target.value)}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCustomOpen(false)}>Cancel</Button>
          <Button
            onClick={handleCreateCategory}
            disabled={!customLabel}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
