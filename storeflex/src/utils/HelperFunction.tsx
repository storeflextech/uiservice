import React  from 'react';
import { useNavigate } from "react-router-dom";

export function GoToNextPage (pagePath: string ) {
    alert(pagePath);
    const navigate = useNavigate();
    navigate(pagePath);
}
