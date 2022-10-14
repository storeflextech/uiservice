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
const [filter, setFilter] = useState('');
const navigate = useNavigate();

  useEffect(()=>{
    const data = ([
      {
        id:1,
        business: "AAA Self Storage",
        name: "Abc Office",
        address: "Six mile, Guwahati-01",
        rate: 58,
        
      },
      {
        id:2,
        business: "BBB Self Storage",
        name: "Cde Office",
        address: "Dispur, Guwahati-02",
        rate: 56,
      },
      {
        id:3,
        business: "CCC Self Storage",
        name: "Efg office",
        address: "Ganesguri, Guwahati-01",
        rate: 59,
      },
      {
        id:4,
        business: "DDD Self Storage",
        name: "Hij Office",
        address: "Pan bazar, Guwahati-01",
        rate: 54,
      },
      {
        id:5,
        business: "EEE Self Storage",
        name: "Klm office",
        address: "Paltan Bazar, Guwahati-01",
        rate: 64,
      }
    ])

    setOffice(data);
    console.log(office)
    console.log('load');

  }, [])



 const addToCart=(e:any,selectedItem:any) => {
   console.log("Selected Item===",selectedItem);
   navigate('/cart');
 }



 const handleFilte =(data:any, filter:any)=>{
  
  setFilter(filter);
  setOffice(data);
  
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

            <Filter officeData={office} handleFilte={handleFilte} />
            
            <Grid item xs={10} sx={{ pl: 1 }}>

              {office.map((data) => (

                <Item key={data.id} sx={{mb:1}}>
                  <Grid item xs={12} sx={{ p: 2 }}>
                    <div className='text-left'>
                      <div className='header'> <BeenhereIcon /> {data.business} </div>
                    </div>
                    <Grid container spacing={2}>
                      <Grid item sm={3}>
                        <div className='card'>
                          <div className='text-left'>
                            <div className='sub-header'> {data.name} </div>
                            <div> {data.address} </div>
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
                             From<span className='sub-header'> ${data.rate} </span>
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
        

            </Grid>
          </Box>
        </Container>
      </Grid>


    </Box>
  );
}