import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, AppBar, Toolbar } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Searchresult() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>

        <Container>
          <Grid item xs={12}>

            <Item>
              <Grid item xs={3}>
                AAA Self Storage
                <br />
                Open Today
              </Grid>
            </Item>

          </Grid>
        </Container>



        <Grid item xs={3}>
          <Item>Office Hours</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>Access House</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>From $54.95</Item>
        </Grid>




      </Grid>






    </Box>
  );
}
