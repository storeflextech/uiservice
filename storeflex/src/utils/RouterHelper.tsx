import { ButtonBase } from "@mui/material";
import React, {useState } from "react";
import { Routes, Route } from "react-router-dom";
import { PAGES } from './Constants';


export const RouterHelper = () => {
    const [isAuth, setIsAuth] = useState(false);
    // const [useType, setUseType] = useState('guest');

    // setUserLoggedIn('true');
    // useEffect(() => {
    //     // setIsAuth(getUserLoggedIn());
    // }, []);

    if(isAuth) {
        // Procted   Pages 
        return (
            <Routes>
                 <Route path="/*" element={<PAGES.SignIn.Component />} />
            </Routes>
        )
    } else {
        // Public  Pages 
        return(
            <Routes>
                <Route path="/*" element={<PAGES.SignIn.Component />} />
            </Routes>
        )
    }
}