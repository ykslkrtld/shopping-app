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
      <Box display="flex" justifyContent="space-between" my={5}>
        <Typography fontSize={"2rem"}>Subtotal ({totalProduct()} product): {calculateTotal()} $</Typography>
        <Button
          variant="contained"
          color="error"
          size="large"
          onClick={handleRemoveAll}
        >
          Empty Cart
        </Button>
      </Box>
    </Container>
  );
};

export default FilledBasketTotal;
