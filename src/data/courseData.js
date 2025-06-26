// src/data/courseData.js
const courseData = [
  {
    id: "course1",
    title: "Mathematics",
    chapters: [
      {
        id: "ch1",
        title: "Algebra",
        subtopics: [
          { id: "sub1", title: "Linear Equations", completed: false },
          { id: "sub2", title: "Quadratic Equations", completed: false },
        ],
      },
      {
        id: "ch2",
        title: "Geometry",
        subtopics: [
          { id: "sub3", title: "Triangles", completed: false },
          { id: "sub4", title: "Circles", completed: false },
        ],
      },
    ],
  },
  // Add more courses...
];

export default courseData;
