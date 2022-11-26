import React from 'react';
import Content from '../../cms/Content.json';
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
            <div className="sf-splitPane-left sf-box-shadow-orange">
                {props.left}
            </div>
            <div className="sf-splitPane-right sf-box-shadow-orange">
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