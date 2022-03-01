import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container>
      <AppBar position="static">
        <Typography align="center">Mountain Activities</Typography>
      </AppBar>
      <Container>
        <Grid>
          <Posts />
        </Grid>
        <Grid>
          <Form />
        </Grid>
      </Container>
    </Container>
  );
}
