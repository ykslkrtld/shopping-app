import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { plsItem, mnsItem } from "../store/BasketReducer";

const BasketCard = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state);

  const handlePlus = (id) => {
    dispatch(plsItem(id))
  }

  const handleMinus = (id) => {
    dispatch(mnsItem(id))
  }


  return (
    <Container align="center">
      <Grid container justifyContent="center" spacing={3} mt={3}>
        {basket.map((item) => (
          <Grid key={item.id} item sm={6} md={4} lg={3}>
            <Card sx={{ height: "100%", width: "18rem", position: "relative" }}>
              <CardMedia
                component="img"
                image={item?.image}
                title={item.title}
                height={"300px"}
                sx={{ objectFit: "contain" }}
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body1"
                  component="div"
                  textAlign="left"
                  width={"70%"}
                >
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.price}
                </Typography>
              </CardContent>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <CardActions
                  sx={{ position: "absolute", bottom: "0", left: "0" }}
                >
                  <Button onClick={() => handleMinus(item.id)}>
                    <RemoveIcon />
                  </Button>
                  <Typography>{item.quantity}</Typography>
                  <Button onClick={() => handlePlus(item.id)}>
                    <AddIcon />
                  </Button>
                </CardActions>
                <CardActions
                  sx={{ position: "absolute", bottom: "0", right: "10px" }}
                >
                  <Button variant="contained" color="error" size="small">
                    REMOVE
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BasketCard;
