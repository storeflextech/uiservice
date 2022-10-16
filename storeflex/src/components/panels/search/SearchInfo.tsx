import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import Cards, { CARD_COLOR } from '../../atoms/cards/cards';
import InputBox from '../../atoms/textfield/InputBox';
import Searchresult from '../../atoms/Searchresult/searchresult'


const SearchInfo = () => {

    const onButtonClick = (searchType: string) => {
        console.log(' onButtonClick ', searchType);
        // navigate(PAGES.BUSINESS_INFO.path);
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        console.log(' #### name ', name);
        console.log(' #### name ', value);
    }
    const handelOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        console.log(' #### name ', name);
        console.log(' #### name ', value);
    }

    const showSearchOption = () => {

        return (
            <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>
                <Grid item xs={12}>
                    <InputBox data={{ name: 'search', label: 'Search By Location', value: '' }}
                        onChange={handleOnChange} onBlur={handelOnBlur}
                    />
                </Grid>
            </Grid>
        )
    }

    const searchOptions = () => {
        return (
            <>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={4}>
                        <Button fullWidth variant="contained" size="large" onClick={() => { onButtonClick('location') }}><b>Search By Location</b></Button>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        
                        <Button fullWidth variant="contained" size="large" onClick={() => { onButtonClick('warehouse_type') }}><b>Search By Warehouse</b></Button>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Button fullWidth variant="contained" size="large" onClick={() => { onButtonClick('company_type') }}><b>Search By Company</b></Button>
                    </Grid>
                </Grid>
            </>
        )
    }

    return (
        <div className='c-box-shadow-blue m-bot-md'>
            {/* <div className='blue-gradient'>
                <div className='font-white p-md f-18px f-bold'> Search Business </div>
            </div> */}
            <div className='p-md'>
                {searchOptions()}
                <div className='p-top-md'>
                    {showSearchOption()}
                </div>
            </div>
            <Searchresult />
        </div>
    );



}

export default SearchInfo;