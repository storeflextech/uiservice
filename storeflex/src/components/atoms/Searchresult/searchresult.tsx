import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './searchresult.css';
import { Container, Button, AppBar, Toolbar } from '@mui/material';
import BeenhereIcon from '@mui/icons-material/Beenhere';


export enum COLOR {
  BLUE = 'bg-blue',
  YELLOW = 'bg-yellow',
  GREEN = 'bg-green',
  ORANGE = 'bg-orange'
}



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Searchresult() {

  const header = `header`;
  const left = `text-lext`;
  const sub = `sub-header`;
  const greenText = `greenText`;


  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>

        <Container>
          <Grid item xs={12}>

            <Item>
              <Grid item xs={12}>
                <div className={left}>
                  <div className={header}> <BeenhereIcon/> AAA Self Storage </div>
                </div>
                <Grid container spacing={2}>
                  <Grid item sm={3}>
                    <div className='card'>
                      <div className={left}>
                        <div className={sub}> Office Name </div>
                        <div> Six mile, Guwahati, 781005 </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item sm={3}>
                    <div className='card'>
                      <div className={left}>
                      <div className={sub}>Office Hours</div>
                      <div className={greenText}>Open Today</div>
                      <div>8:30am - 12pm</div>
                      <div>12:30pm - 5:30pm</div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item sm={3}>
                    <div className='card'>
                      <div className={left}>
                      <div className={sub}>Access Hours</div>
                      <div>Mon-Sun:</div>
                      <div>6am - 9pm</div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item sm={3}>
                    <div className='card'>
                      <div className={left}>
                        <span> From $54.95 </span>
                      </div>
                      <div className={left}>
                      <Button variant="contained" color="success" size="small"> View Rates </Button>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Item>
            <Item>
              <Grid item xs={12}>
                <div className={left}>
                  <div className={header}> <BeenhereIcon/> AAA Self Storage </div>
                </div>
                <Grid container spacing={2}>
                  <Grid item sm={3}>
                    <div className='card'>
                      <div className={left}>
                        <div className={sub}> Office Name </div>
                        <div> Six mile, Guwahati, 781005 </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item sm={3}>
                    <div className='card'>
                      <div className={left}>
                      <div className={sub}>Office Hours</div>
                      <div className={greenText}>Open Today</div>
                      <div>8:30am - 12pm</div>
                      <div>12:30pm - 5:30pm</div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item sm={3}>
                    <div className='card'>
                      <div className={left}>
                      <div className={sub}>Access Hours</div>
                      <div>Mon-Sun:</div>
                      <div>6am - 9pm</div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item sm={3}>
                    <div className='card'>
                      <div className={left}>
                        <span> From $54.95 </span>
                      </div>
                      <div className={left}>
                      <Button variant="contained" color="success" size="small"> View Rates </Button>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Item>
            <Item>
              <Grid item xs={12}>
                <div className={left}>
                  <div className={header}> <BeenhereIcon/> AAA Self Storage </div>
                </div>
                <Grid container spacing={2}>
                  <Grid item sm={3}>
                    <div className='card'>
                      <div className={left}>
                        <div className={sub}> Office Name </div>
                        <div> Six mile, Guwahati, 781005 </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item sm={3}>
                    <div className='card'>
                      <div className={left}>
                      <div className={sub}>Office Hours</div>
                      <div className={greenText}>Open Today</div>
                      <div>8:30am - 12pm</div>
                      <div>12:30pm - 5:30pm</div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item sm={3}>
                    <div className='card'>
                      <div className={left}>
                      <div className={sub}>Access Hours</div>
                      <div>Mon-Sun:</div>
                      <div>6am - 9pm</div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item sm={3}>
                    <div className='card'>
                      <div className={left}>
                        <span> From $54.95 </span>
                      </div>
                      <div className={left}>
                      <Button variant="contained" color="success" size="small"> View Rates </Button>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Item>
            <Item>
              <Grid item xs={12}>
                <div className={left}>
                  <div className={header}> <BeenhereIcon/> AAA Self Storage </div>
                </div>
                <Grid container spacing={2}>
                  <Grid item sm={3}>
                    <div className='card'>
                      <div className={left}>
                        <div className={sub}> Office Name </div>
                        <div> Six mile, Guwahati, 781005 </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item sm={3}>
                    <div className='card'>
                      <div className={left}>
                      <div className={sub}>Office Hours</div>
                      <div className={greenText}>Open Today</div>
                      <div>8:30am - 12pm</div>
                      <div>12:30pm - 5:30pm</div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item sm={3}>
                    <div className='card'>
                      <div className={left}>
                      <div className={sub}>Access Hours</div>
                      <div>Mon-Sun:</div>
                      <div>6am - 9pm</div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item sm={3}>
                    <div className='card'>
                      <div className={left}>
                        <span> From $54.95 </span>
                      </div>
                      <div className={left}>
                      <Button variant="contained" color="success" size="small"> View Rates </Button>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Item>
            <Item>
              <Grid item xs={12}>
                <div className={left}>
                  <div className={header}> <BeenhereIcon/> AAA Self Storage </div>
                </div>
                <Grid container spacing={2}>
                  <Grid item sm={3}>
                    <div className='card'>
                      <div className={left}>
                        <div className={sub}> Office Name </div>
                        <div> Six mile, Guwahati, 781005 </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item sm={3}>
                    <div className='card'>
                      <div className={left}>
                      <div className={sub}>Office Hours</div>
                      <div className={greenText}>Open Today</div>
                      <div>8:30am - 12pm</div>
                      <div>12:30pm - 5:30pm</div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item sm={3}>
                    <div className='card'>
                      <div className={left}>
                      <div className={sub}>Access Hours</div>
                      <div>Mon-Sun:</div>
                      <div>6am - 9pm</div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item sm={3}>
                    <div className='card'>
                      <div className={left}>
                        <span> From $54.95 </span>
                      </div>
                      <div className={left}>
                      <Button variant="contained" color="success" size="small"> View Rates </Button>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Item>





          </Grid>
        </Container>





      </Grid>






    </Box>
  );
}
