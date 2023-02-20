import { Box } from "@mui/material";
import Header from "../../components/header";

const Home = () => {
  return (
  <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="HOME" subtitle="Customize your Dashboard!" />
    </Box>
  </Box>
  );
};

export default Home;
