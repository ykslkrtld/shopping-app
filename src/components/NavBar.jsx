import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Badge, Button } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const navigate = useNavigate();
  const basket = useSelector((state) => state.basket)
  return (
    <Box position='fixed' top={0} width={"100%"} zIndex={1}  sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
          <NavLink to={"/"} style={{ color: "white", textDecoration:"none" }}>
            Yksl Store
          </NavLink>
          <Badge badgeContent={basket.length} color="error">
            <ShoppingBasketIcon onClick={() => navigate("/basket")} sx={{cursor:"pointer"}} />
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
