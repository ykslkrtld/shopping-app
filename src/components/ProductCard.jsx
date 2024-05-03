import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../store/basketReducer";

export default function ProductCard({products}) {
  const disPatch = useDispatch()
  const {basket} = useSelector((state) => state)
  console.log(basket)
  return (
    <Container align="center">
      <Typography variant="h3" color="red" m={3}>
        Products
      </Typography>
      <Grid container justifyContent="center" spacing={3}>
        {products.map((item) => (
          <Grid key={item.id} item sm={6} md={4} lg={3}>
            <Card sx={{height:"100%", width:"18rem"}}>
              <CardMedia
                component="img"
                image={item?.image}
                title={item.title}
                height={"300px"}
                sx={{objectFit:"contain"}}
              />
              <CardContent sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <Typography variant="body1" component="div" textAlign="left" noWrap>
                  {item.title}
                </Typography> 
                <Typography variant="body1" color="text.secondary">
                  {item.price}
                </Typography>
              </CardContent>
              <CardContent sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <Typography >
                  {item.category}
                </Typography>
              <CardActions>
                <Button variant="contained" color="success" size="small" onClick={() => disPatch(addToBasket(item))}>
                <ShoppingCartIcon/>
                </Button>
              </CardActions>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
