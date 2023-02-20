import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/header";

const Inventory = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
  return (
  <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="INVENTORY" subtitle="Manage your Inventory!" />
    </Box>
  </Box>
  );
};

export default Inventory;