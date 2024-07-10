import React from "react";
import BasketCard from "./BasketCard";
import { rmvAll } from "../store/BasketReducer";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Container, Typography } from "@mui/material";

const FilledBasketTotal = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state);

  const handleRemoveAll = () => {
    dispatch(rmvAll());
  };

  const calculateTotal = () => {
    return basket.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const totalProduct = () => {
    return basket.reduce((totalPro, item) => totalPro + item.quantity, 0);
  };

  return (
    <Container sx={{marginTop:"5rem"}}>
      <BasketCard />
      <Box display="flex" justifyContent="space-around" my={5}>
        <Typography fontSize={"1.5rem"} border={"3px solid red"} borderRadius={3} padding={"0.5rem 1.5rem"}>Subtotal ( {totalProduct()} {totalProduct() > 1 ? "products" : "product"} ) : <span style={{color:"green"}}>{calculateTotal()} $</span></Typography>
        <Button
          variant="contained"
          color="error"
          size="large"
          sx={{fontSize:"1.1rem", borderRadius:"0.8rem"}}
          onClick={handleRemoveAll}
        >
          Empty Cart
        </Button>
      </Box>
    </Container>
  );
};

export default FilledBasketTotal;
