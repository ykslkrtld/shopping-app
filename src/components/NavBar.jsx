import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Badge, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SamStore
          </Typography>
          <Badge badgeContent={8} color="error">
          <Button onClick={() => navigate("/basket")}>
            <ShoppingBasketIcon />
          </Button>
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
