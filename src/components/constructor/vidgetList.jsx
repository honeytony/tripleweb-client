import React from 'react';

const VidgetList = ({ cardList, sortCards, dragStartHandler, dragEndHandler, dropHandler }) => {
    return (
        <div className="vidget-list">
            {cardList.sort(sortCards).map((card) => (
                <div
                    onDragStart={(e) => dragStartHandler(e, card)}
                    onDragLeave={(e) => dragEndHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDrop={(e) => dropHandler(e, card)}
                    draggable={true}
                    className={'vidget'}
                    key={`${card.id}`}>
                    {card.text}
                </div>
            ))}
        </div>
    );
};

export default VidgetList;
