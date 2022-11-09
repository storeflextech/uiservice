import React from 'react';
import { Box, Container } from '@mui/material';

const SearchWarehouse = () => {
    return(
        <>
            <Container component="main" maxWidth="xl" className='p-no'>
            <div className='c-box-shadow-blue'>
                <Box className='m-top-md m-bot-md m-left-md m-right-md'>
                    <div>
                         Search Warehouse
                    </div>
                </Box>
            </div>
            </Container>
        </>
    )
}

export default SearchWarehouse;
