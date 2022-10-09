import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './searchresult.css';
import { Container, Button, AppBar, Toolbar } from '@mui/material';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import Filter from './filter';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Searchresult() {


  
const [office, setOffice] = useState<Array<any>>([]);
const [filter, setFilter] = useState('asc');
const navigate = useNavigate();

  useEffect(()=>{
    const data = ([
      {
        id:1,
        name: "Office 1",
        rate: 58,
      },
      {
        id:2,
        name: "Office 2",
        rate: 56,
      },
      {
        id:3,
        name: "Office 3",
        rate: 59,
      },
      {
        id:4,
        name: "Office 4",
        rate: 54,
      },
      {
        id:5,
        name: "Office 5",
        rate: 64,
      }
    ])

    // setOffice(data);

    // let sortedData = data.sort((a, b) =>  b.rate - a.rate
    // );
    

    setOffice(data);


  }, [])



  function sortAscending() {
    var sortedData = office.sort((a, b) => 
    { 
      return a.rate - b.rate
    });

    setFilter('dsc');
    setOffice(sortedData);

  }

  function sortDecending(){
    var sortedData = office.sort((a, b) => 
    { 
      return b.rate - a.rate
    });

    setFilter('asc');
    setOffice(sortedData);
  }

 function addToCart(e:any,selectedItem:any){
   console.log("Selected Item===",selectedItem);
   navigate('/cart');
 }

  return (

    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Container maxWidth="xl">        
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            borderRadius: 1,
          }}>

            <Filter/>
            
            <Grid item xs={10} sx={{ pl: 1 }}>

              {office.map((data) => (

                <Item key={data.id} sx={{mb:1}}>
                  <Grid item xs={12} sx={{ p: 2 }}>
                    <div className='text-left'>
                      <div className='header'> <BeenhereIcon /> AAA Self Storage </div>
                    </div>
                    <Grid container spacing={2}>
                      <Grid item sm={3}>
                        <div className='card'>
                          <div className='text-left'>
                            <div className='sub-header'> {data.name} </div>
                            <div> Six mile, Guwahati, 781005 </div>
                            <div className='text-brown pt-2'><HourglassTopIcon /> Few rooms left.</div>
                          </div>
                        </div>
                      </Grid>
                      <Grid item sm={3}>
                        <div className='card'>
                          <div className='text-left'>
                            <div className='sub-header'>Office Hours</div>
                            <div className='greenText'>Open Today</div>
                            <div>8:30am - 12pm</div>
                            <div>12:30pm - 5:30pm</div>
                          </div>
                        </div>
                      </Grid>
                      <Grid item sm={3}>
                        <div className='card'>
                          <div className='text-left'>
                            <div className='sub-header'>Access Hours</div>
                            <div>Mon-Sun:</div>
                            <div>6am - 9pm</div>
                          </div>
                        </div>
                      </Grid>
                      <Grid item sm={3}>
                        <div className='card'>
                          <div className='text-left'>
                            <span> From ${data.rate} </span>
                          </div>
                          <div className='text-left'>
                            <Button variant="contained" color="success" size="small" onClick={(e) => { addToCart(e,data) }}> Add to Cart </Button>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Item>

              ))}
              <div className='text-left'>
                <Button variant="contained" color="success" size="small" onClick={sortAscending}> Ascending </Button>
              </div>

              <div className='text-left'>
                <Button variant="contained" color="success" size="small" onClick={sortDecending}> Decending </Button>
              </div>

            </Grid>
          </Box>
        </Container>

      </Grid>






    </Box>
  );
}
