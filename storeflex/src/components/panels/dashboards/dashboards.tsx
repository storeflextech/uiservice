import React from 'react';
import { useNavigate } from "react-router-dom";
import { Grid, Button } from '@mui/material';
import { PAGES } from '../../../utils/Constants';

const Dashboards = () => {

    const navigate = useNavigate();

    const addBusiness = () => {
        console.log(' addBusiness ');
        navigate(PAGES.BUSINESS_INFO.path);
    }

    const searchBusiness = () => {
        console.log(' searchBusiness ');
        navigate(PAGES.PG_SEARCH.path);
    }

    const addUser = () => {
        console.log(' addSfUser ');
        navigate(PAGES.ADD_INFO.path);
    }

    return(
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={4}>
                    <Button fullWidth variant="contained" size="large" onClick={() => {addBusiness()}}><b>Add Bussiness</b></Button>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                <Button fullWidth variant="contained" size="large" onClick={() => {searchBusiness()}}><b>Search Bussiness</b></Button>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                <Button fullWidth variant="contained" size="large" onClick={() => {addUser()}}><b>Add  user </b></Button>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                <Button fullWidth variant="contained" size="large" onClick={() => {addUser()}}><b>Add Location</b></Button>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                <Button fullWidth variant="contained" size="large" onClick={() => {addUser()}}><b>Reports</b></Button>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                <Button fullWidth variant="contained" size="large" onClick={() => {addUser()}}><b>Content Update</b></Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboards;