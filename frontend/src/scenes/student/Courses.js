import { Box } from "@mui/material";
import Header from "../../components/Header";
import CourseCard from "../../components/CourseCard";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Courses = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/getmodules");

        if (response.ok) {
          const responseData = await response.json();
          setModules(responseData);
        } else {
          console.error("Failed to fetch modules: " + response.status);
        }
      } catch (error) {
        console.error("Error fetching modules: ", error);
      }
    };

    fetchModules();
  }, []);

  return (
    <Box mt="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Courses" subtitle="Access your courses here" />
      </Box>
      <Box display="flex">
        {modules.map((module) => (
          <CourseCard moduleId={module._id} />
        ))}
      </Box>
    </Box>
  );
};

export default Courses;
