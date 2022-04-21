import React from 'react';

const VidgetContainer = ({ dropHandler, currentCardList, dragOverHandler }) => {
    return (
        <div
            className={'container'}
            onDrop={(e) => dropHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}>
            {currentCardList &&
                currentCardList.map((card) => {
                    switch (card.object) {
                        case 'text':
                            return <input type="text" className="vidgetTextArea" />;

                        case 'button':
                            return (
                                <input type="button" className="vidgetButton" value="Отправить" />
                            );
                        case 'textarea':
                            return <div className="vidgetLed">0.0</div>;
                        default:
                            return <p>Такого виджета не существует</p>;
                    }
                })}
        </div>
    );
};

export default VidgetContainer;
