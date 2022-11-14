import React from 'react';

const VidgetList = ({ VidgetList, sortVidgets, dragStartHandler, dragEndHandler, dropHandler }) => {
    return (
        <div className="vidget-list">
            {VidgetList.sort(sortVidgets).map((vidget) => (
                <div
                    onDragStart={(e) => dragStartHandler(e, vidget)}
                    onDragLeave={(e) => dragEndHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDrop={(e) => dropHandler(e, vidget)}
                    draggable={true}
                    className={'vidget'}
                    key={`${vidget.id}`}>
                    {vidget.text}
                </div>
            ))}
        </div>
    );
};

export default VidgetList;
