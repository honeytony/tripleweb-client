import React, { useState } from 'react';
import './style.css';
import VidgetContainer from './vidgetContainer';
import VidgetList from './vidgetList';
import vidgets from './vidgetStore';

const DragTable = (props) => {
    const [cardList] = useState(vidgets);
    const [currentCardList, setCurrentCardList] = useState([cardList]); //Виджеты в контейнере

    const [currentCard, setCurrentCard] = useState(); //Выбранный виджет

    function dragStartHandler(e, card) {
        setCurrentCard(card);
        console.log('drag');
    }

    function dragOverHandler(e, card) {
        e.preventDefault();
        e.target.style.border = '2px solid green';
    }
    function dragEndHandler(e, card) {
        e.target.style.background = 'white';
    }
    function dropHandler(e, card) {
        e.preventDefault();
        e.target.style.background = 'white';
        e.target.style.border = 'none';
        setCurrentCardList((oldList) => [...oldList, currentCard]);
    }

    const sortCards = (a, b) => {
        if (a.order > b.order) {
            return 1;
        } else {
            return -1;
        }
    };

    return (
        <div className="wrapper">
            <VidgetList
                cardList={cardList}
                sortCards={sortCards}
                dragStartHandler={dragStartHandler}
                dragEndHandler={dragEndHandler}
                dropHandler={dropHandler}
            />
            <VidgetContainer
                currentCardList={currentCardList}
                cardList={cardList}
                sortCards={sortCards}
                onDragStart={dragStartHandler}
                onDragLeave={dragEndHandler}
                onDragEnd={dragEndHandler}
                dropHandler={dropHandler}
                dragOverHandler={dragOverHandler}
            />
        </div>
    );
};

export default DragTable;
