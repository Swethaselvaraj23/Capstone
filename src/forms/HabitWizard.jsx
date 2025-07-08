import React, { useState } from "react";
import HabitYesNoForm from "./HabitYesNoForm";
import HabitNumericForm from "./HabitNumericForm";
import HabitChecklistForm from "./HabitChecklistForm";
import HabitTimerForm from "./HabitTimerForm";

export default function HabitWizard({ type, onBack, onSave }) {
  const [stepData, setStepData] = useState({});

  const handleSave = (data) => {
    console.log("HabitWizard saved data:", data);
    // combine with any earlier data if needed
    onSave(data);
  };

  const renderForm = () => {
    switch (type) {
      case "Yes/No":
        return (
          <HabitYesNoForm
            onBack={onBack}
            onSave={handleSave}
          />
        );
      case "Numeric":
        return (
          <HabitNumericForm
            onBack={onBack}
            onSave={handleSave}
          />
        );
      case "Checklist":
        return (
          <HabitChecklistForm
            onBack={onBack}
            onSave={handleSave}
          />
        );
      case "Timer":
        return (
          <HabitTimerForm
            onBack={onBack}
            onSave={handleSave}
          />
        );
      default:
        return <div>Unknown type</div>;
    }
  };

  return <>{renderForm()}</>;
}
