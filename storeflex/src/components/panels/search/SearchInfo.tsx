import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Cards, { CARD_COLOR } from '../../atoms/cards/cards'; 
import InputBox from '../../atoms/textfield/InputBox';
import Searchresult from '../../atoms/Searchresult/serachresult'


const SearchInfo = () => {

    const onButtonClick = (searchType: string) => {
        console.log(' onButtonClick ', searchType);
        // navigate(PAGES.BUSINESS_INFO.path);
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value } = e.currentTarget;
        console.log(' #### name ', name);
        console.log(' #### name ', value);
    }
    const handelOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const {name, value } = e.currentTarget;
        console.log(' #### name ', name);
        console.log(' #### name ', value);
    }

    const showSearchOption = () => {

        return (
            <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>
                <Grid item xs={12}>
                    <InputBox data={{name:'search', label:'Search By Location' , value: ''}}
                        onChange={handleOnChange} onBlur={handelOnBlur} 
                    />
                </Grid>
            </Grid>
        )
    }
    
    const searchOptions = () => {
        return(
            <>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={4}>
                        <Cards cardBg={CARD_COLOR.BLUE} onCardClick={() => {onButtonClick('location')}}>
                            <span> Search By Location </span>
                        </Cards>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Cards cardBg={CARD_COLOR.ORANGE} onCardClick={() => {onButtonClick('warehouse_type')}}>
                        <span> Search By Warehouse </span>
                        </Cards>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Cards cardBg={CARD_COLOR.GREEN} onCardClick={() => {onButtonClick('company_type')}}>
                        <span> Search By Company </span>
                        </Cards>
                    </Grid>
                </Grid>
            </>
        )
    }

    return(
        <div className='c-box-shadow-blue m-bot-md'>
            <div className='blue-gradient'>
                <div className='font-white p-md f-18px f-bold'> Search Business </div>
            </div>
            <div className='p-md'>
            {searchOptions()}
            <div className='p-top-md'>
                {showSearchOption()}
            </div>
            </div>

            <Searchresult/>


        </div>
    );



}

export default SearchInfo;