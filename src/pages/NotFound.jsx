import React from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item>
        <Typography variant="h1">404 Not Found</Typography>
        <Button variant="contained" color="primary" onClick={()=>navigate("/")} >Go back to home</Button>
      </Grid>
    </Grid>
  );
};

export default NotFound;