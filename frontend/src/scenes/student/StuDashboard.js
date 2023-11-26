import { Box } from "@mui/material";
import Header from "../../components/Header";

const StuDashboard = () => {
  return (
    <Box mt="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};

export default StuDashboard;
