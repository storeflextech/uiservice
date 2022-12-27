import React, {useState} from 'react';
import Content from '../../cms/Content.json';
import {CmsContext} from '../../context/ContextProvider';
import { ChevronRight, ChevronLeft } from '../buttons/buttons';

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

    const [menuOpen, setMenuOpen] = useState(true);
    const onChevronClick = () => {
    setMenuOpen(!menuOpen);
    }
    const showChevron = () => {
        if(menuOpen) {
            return(
            <ChevronLeft onBtnClick={onChevronClick}/>
            )
        } else {
            return(
                <ChevronRight onBtnClick={onChevronClick}/>
            )
        }
    }
    return(
        <div className='sf-main-container'>
            <div className='side-nav-icon'>
                {showChevron()}
            </div>
            <div className="sf-split-pane-container">
                <div className={`${menuOpen ? 'side-nav-show' : 'side-nav-hide'} sf-splitPane-left`}>
                    {props.left}
                </div>
                <div className="sf-splitPane-right sf-box-shadow-orange">
                    {props.right}
                </div>
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