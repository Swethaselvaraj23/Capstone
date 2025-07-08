import React, { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Welcome to Tracklyn",
    description: "Your all-in-one productivity app to track goals, habits, and progress with ease!",
    image: "/path/to/tracklyn-logo.png",
  },
  {
    title: "Build a Better Routine",
    description: "Start recording tasks and habits you want to track, and manage your schedule efficiently.",
    image: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
  },
  {
    title: "Make Each Day Count",
    description: "Receive a daily list of activities and use customizable reminders to complete them all.",
    image: "https://cdn-icons-png.flaticon.com/512/3588/3588607.png",
  },
  {
    title: "Stay Motivated",
    description: "Create streaks for your habits and track your progress with charts and insights.",
    image: "https://cdn-icons-png.flaticon.com/512/2972/2972710.png",
  },
];

const WelcomePage = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    } else {
      navigate("/dashboard"); // change this to your next page
    }
  };

  const handleSkip = () => {
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#000",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        p: 3,
      }}
    >
      {/* Logo / Slide Image */}
      <Box sx={{ mt: 8 }}>
        <img
          src={slides[index].image}
          alt={slides[index].title}
          style={{ width: 120, height: 120 }}
        />
      </Box>

      {/* Text */}
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#FF3B6C" }}
        >
          {slides[index].title}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: "#ccc", maxWidth: 300 }}>
          {slides[index].description}
        </Typography>
      </Box>

      {/* Bottom Controls */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Button variant="text" sx={{ color: "#fff" }} onClick={handleSkip}>
          Skip
        </Button>

        <Stack direction="row" spacing={1}>
          {slides.map((_, i) => (
            <Box
              key={i}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: i === index ? "#FF3B6C" : "#444",
              }}
            />
          ))}
        </Stack>

        <Button variant="text" sx={{ color: "#fff" }} onClick={handleNext}>
          {index === slides.length - 1 ? "Finish" : "Next"}
        </Button>
      </Stack>
    </Box>
  );
};

export default WelcomePage;
