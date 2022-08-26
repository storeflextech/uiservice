import React from 'react';
import { useNavigate } from "react-router-dom";
import { Grid } from '@mui/material';
import Cards, { CARD_COLOR } from '../../atoms/cards/cards'; 

const Dashboards = () => {

    const navigate = useNavigate();

    const addBusiness = () => {
        console.log(' addBusiness ');
        navigate('/businessinfo');
    }

    const searchBusiness = () => {
        console.log(' searchBusiness ');
    }

    const addSfUser = () => {
        console.log(' addSfUser ');
    }

    return(
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={4}>
                    <Cards cardBg={CARD_COLOR.BLUE} onCardClick={() => {addBusiness()}}>
                        <span> Add Bussiness </span>
                    </Cards>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Cards cardBg={CARD_COLOR.ORANGE} onCardClick={() => {searchBusiness()}}>
                    <span> Search Bussiness </span>
                    </Cards>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Cards cardBg={CARD_COLOR.GREEN} onCardClick={() => {addSfUser()}}>
                    <span> Add Storeflex user </span>
                    </Cards>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Cards cardBg={CARD_COLOR.YELLOW}>
                    <span> Add Location </span>
                    </Cards>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Cards cardBg={CARD_COLOR.BLUE}>
                    <span> Reports </span>
                    </Cards>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Cards cardBg={CARD_COLOR.ORANGE}>
                    <span> Content Update </span>
                    </Cards>
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboards;