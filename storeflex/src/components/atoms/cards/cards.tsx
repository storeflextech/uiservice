import React from 'react';
import './cards.css';

export enum CARD_COLOR {
    BLUE = 'sf-card-bg-blue',
    YELLOW = 'sf-card-bg-yellow',
    GREEN = 'sf-card-bg-green',
    ORANGE = 'sf-card-bg-orange'
}

interface cardsProps {
    onCardClick?(): void;
    cardBg?: string;
    children: React.ReactNode;
}

const Cards = (props: cardsProps) => {

    const onClick = () => {
        if(props.onCardClick) {
            return props.onCardClick();
        } else {
            console.log(' No Event ');
        }
    }
    const css = `sf-card-container sf-card:hover ${props.cardBg}`
    return(
        <div className={css} onClick={onClick}> 
            <div className='sf-card-content'> {props.children} </div>
        </div>
    )
} 

export default Cards;