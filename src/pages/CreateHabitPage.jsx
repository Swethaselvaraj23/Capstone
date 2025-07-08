import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import TypeSelector from "../components/dialogs/TypeSelector";
import ProgressTypeSelector from "../components/dialogs/ProgressTypeSelector";
import CategorySelector from "../components/dialogs/CategorySelector";
import HabitWizard from "../forms/HabitWizard";

const CreateHabitPage = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedProgressType, setSelectedProgressType] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  console.log("🪵 CreateHabitPage State:", {
    selectedType,
    selectedProgressType,
    selectedCategory,
  });

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" mb={3}>
        Create New Habit
      </Typography>

      {/* Type selector */}
      <TypeSelector
        open={!selectedType}
        onClose={() => {
          console.log("❌ TypeSelector closed");
        }}
        onSelect={(type) => {
          console.log("✅ Type selected:", type);
          setSelectedType(type);
        }}
      />

      {/* Progress type selector */}
      <ProgressTypeSelector
        open={!!selectedType && !selectedProgressType}
        onClose={() => {
          console.log("❌ ProgressTypeSelector closed");
          setSelectedType(null);
        }}
        onSelect={(progressType) => {
          console.log("✅ Progress Type selected:", progressType);
          setSelectedProgressType(progressType);
        }}
      />

      {/* Category selector */}
      <CategorySelector
        open={!!selectedProgressType && !selectedCategory}
        onClose={() => {
          console.log("❌ CategorySelector closed");
          setSelectedProgressType(null);
        }}
        onSelect={(category) => {
          console.log("✅ Category selected:", category);
          setSelectedCategory(category);
        }}
      />

      {/* Wizard appears when all selections are made */}
      {selectedType && selectedProgressType && selectedCategory && (
        <HabitWizard
          type={selectedProgressType}
          category={selectedCategory}
          onBack={() => {
            console.log("🔙 Going back from wizard to category selection");
            setSelectedCategory(null);
          }}
          onSave={(habitData) => {
            console.log("✅ Final Habit Data:", habitData);
            // Optionally reset the flow here:
            setSelectedType(null);
            setSelectedProgressType(null);
            setSelectedCategory(null);
          }}
        />
      )}
    </Box>
  );
};

export default CreateHabitPage;
