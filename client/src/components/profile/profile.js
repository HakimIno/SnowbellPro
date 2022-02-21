import React from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import Posts from '../Posts/Posts';

const profile = () => {
  return (
    <Grow in>
    <Container>
      <Grid >
        <Grid>
          <Posts />
        </Grid>
      </Grid>
    </Container>
  </Grow>
  )
}

export default profile