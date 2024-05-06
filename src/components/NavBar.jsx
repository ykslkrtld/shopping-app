import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Badge, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const navigate = useNavigate();
  const basket = useSelector((state) => state.basket)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SamStore
          </Typography>
          <Badge badgeContent={basket.length} color="error">
            <ShoppingBasketIcon onClick={() => navigate("/basket")} />
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
