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

                {/* <div className='col-md-12 d-flex justify-content-center mt-4'>
                    <div className="col-md-8 input-group mb-3">
                        <div className="input-group-prepend">
                            <select className="input-group-text">
                                <option value="">All</option>
                                <option value="">Search By Location</option>
                                <option value="">Search By Warehouse</option>
                                <option value="">Search By Company</option>
                            </select>
                        </div>
                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                        <div className="input-group-append">
                            <span className="input-group-text btn btn-secondary py-0 d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div> */}

                {/* <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={4}>
                        <Button fullWidth variant="contained" size="large" onClick={() => { onButtonClick('location') }}><b>Search By Location</b></Button>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        
                        <Button fullWidth variant="contained" size="large" onClick={() => { onButtonClick('warehouse_type') }}><b>Search By Warehouse</b></Button>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Button fullWidth variant="contained" size="large" onClick={() => { onButtonClick('company_type') }}><b>Search By Company</b></Button>
                    </Grid>
                </Grid> */}
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
                    {/* {showSearchOption()} */}
                </div>
            </div>
            <Searchresult />
        </div>
    );



}

export default SearchInfo;