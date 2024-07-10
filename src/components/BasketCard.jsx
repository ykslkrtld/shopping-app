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
import DeleteIcon from "@mui/icons-material/Delete";
import { plsItem, mnsItem, rmvItem } from "../store/BasketReducer";

const BasketCard = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state);
  const handlePlus = (id) => {
    dispatch(plsItem(id));
  };

  const handleMinus = (id) => {
    dispatch(mnsItem(id));
  };

  const handleRemove = (id) => {
    dispatch(rmvItem(id));
  };

  return (
    <Container align="center">
      <Grid container justifyContent="center" spacing={3} my={3}>
        {basket.map((item) => (
          <Grid key={item.id} item sm={6} md={4}>
            <Card sx={{ height: "100%", width: "20rem", position: "relative" }}>
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
                <Typography variant="body1" color="green">
                  {item.price.toFixed(2)} $
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
                  <Button
                    onClick={() => {
                      item.quantity > 1
                        ? handleMinus(item.id)
                        : handleRemove(item.id);
                    }}
                  >
                    {item.quantity <= 1 ? (
                      <DeleteIcon color="error" />
                    ) : (
                      <RemoveIcon color="error" />
                    )}
                  </Button>
                  <Typography>{item.quantity}</Typography>
                  <Button onClick={() => handlePlus(item.id)}>
                    <AddIcon color="success" />
                  </Button>
                </CardActions>
                <CardActions
                  sx={{ position: "absolute", bottom: "0", right: "10px" }}
                >
                  {item.quantity > 1 && (
                    <Button
                      size="small"
                      onClick={() => handleRemove(item.id)}
                    >
                      {<DeleteIcon color="error" />}
                    </Button>
                  )}
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
