import React from 'react';
import Content from '../../utils/Content.json';
import {CmsContext} from '../../context/ContextProvider';

export const AppContainer = (props) => {
    return(
        <CmsContext.Provider value={Content}>
            <div className='w100'>
                {props.children}
            </div>
        </CmsContext.Provider>
    )
}

export const SplitPaneContainer = (props) => {
    return(
        <div className="sf-split-pane-container">
            <div className="sf-splitPane-left">
                {props.left}
            </div>
            <div className="sf-splitPane-right">
                {props.right}
            </div>
        </div>
    )
}

export const BoxContainer = (props) => {
    const boxStyle = "sf-box-shadow-orange";
    return(
        <div className={boxStyle}>
            {props.children}
        </div>
    )
}