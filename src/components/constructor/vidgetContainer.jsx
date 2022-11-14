import React from 'react';
import Draggable from 'react-draggable';

const VidgetContainer = ({ dropHandler, currentVidgetList, dragOverHandler }) => {
    return (
        <div
            className={'container'}
            onDrop={(e) => dropHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}>
            {currentVidgetList &&
                currentVidgetList.map((Vidget, index) => {
                    switch (Vidget.object) {
                        case 'text':
                            return (
                                <Draggable
                                    key={`${Vidget.id}_${index}`}
                                    defaultPosition={{ x: 0, y: 0 }}
                                    bounds={{ left: 0, top: 0 }}>
                                    <input type="text" className="vidgetTextArea" />
                                </Draggable>
                            );

                        case 'button':
                            return (
                                <Draggable
                                    key={`${Vidget.id}_${index}`}
                                    defaultPosition={{ x: 0, y: 0 }}
                                    bounds={{ left: 0, top: 0 }}>
                                    <input
                                        type="button"
                                        className="vidgetButton"
                                        value="Отправить"
                                    />
                                </Draggable>
                            );
                        case 'textarea':
                            return (
                                <Draggable
                                    key={`${Vidget.id}_${index}`}
                                    defaultPosition={{ x: 0, y: 0 }}
                                    bounds={{ left: 0, top: 0 }}>
                                    <div className="vidgetLed">0.0</div>
                                </Draggable>
                            );
                        default:
                            return <p>Такого виджета не существует</p>;
                    }
                })}
        </div>
    );
};

export default VidgetContainer;
