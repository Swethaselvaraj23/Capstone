import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

// Set initial structure
export const saveUserSubject = async (uid, subjectName, data) => {
  const ref = doc(db, "users", uid);
  await setDoc(ref, {
    subjects: {
      [subjectName]: data
    }
  }, { merge: true });
};

// Update subtopic checkbox
export const updateSubtopicStatus = async (uid, subject, chapter, topic, subtopic, status) => {
  const ref = doc(db, "users", uid);
  await updateDoc(ref, {
    [`subjects.${subject}.chapters.${chapter}.topics.${topic}.subtopics.${subtopic}`]: status
  });
};


