import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Badge } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const navigate = useNavigate();
  const basket = useSelector((state) => state.basket)
  return (
    <Box position='fixed' top={0} width={"100%"} zIndex={1} sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"black"}}>
        <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
          <NavLink to={"/"} style={{ color: "white", textDecoration:"none", fontWeight:"600" }}>
            Yksl Store
          </NavLink>
          <Badge badgeContent={basket.length} onClick={() => navigate("/basket")} sx={{cursor:"pointer"}} color="error">
            <ShoppingBasketIcon />
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
