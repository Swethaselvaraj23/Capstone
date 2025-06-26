// src/components/StudentProgressTracker.jsx

import React, { useState, useEffect } from "react";
import { getProgress, saveProgress } from "../services/ProgressService";
import { Checkbox, FormControlLabel } from "@mui/material";

const StudentProgressTracker = ({ user }) => {
  const [progress, setProgress] = useState({});
  const course = "Math";
  const subject = "Algebra";
  const chapter = "Linear Equations";
  const topic = "Solving";

  useEffect(() => {
    if (user?.uid) {
      getProgress(user.uid).then((data) => {
        setProgress(data);
      });
    }
  }, [user?.uid]);

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setProgress((prev) => ({
      ...prev,
      [course]: {
        ...prev[course],
        [subject]: {
          ...prev[course]?.[subject],
          [chapter]: {
            ...prev[course]?.[subject]?.[chapter],
            [topic]: isChecked,
          },
        },
      },
    }));

    saveProgress(user.uid, course, subject, chapter, topic, isChecked);
  };

  const isChecked =
    progress?.[course]?.[subject]?.[chapter]?.[topic] ?? false;

  return (
    <div>
      <h3>Track Progress</h3>
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked}
            onChange={handleCheckboxChange}
            color="primary"
          />
        }
        label="Solving Linear Equations"
      />
    </div>
  );
};

export default StudentProgressTracker;
