import React, { useEffect, useState } from 'react';
import './style.css';
import VidgetContainer from './vidgetContainer';
import VidgetList from './vidgetList';
import vidgets from './vidgetStore';

const DragTable = (props) => {
    const [vidgetList] = useState(vidgets);
    const [currentVidgetList, setCurrentVidgetList] = useState([]); //Виджеты в контейнере

    const [currentVidget, setCurrentVidget] = useState(); //Выбранный виджет

    function dragStartHandler(e, Vidget) {
        setCurrentVidget(Vidget);
        console.log('drag');
    }
    useEffect(() => {
        console.log('vidgetList = ', vidgetList);
        console.log('currVIlist=', currentVidgetList);
        console.log(window.innerWidth);
    }, []);

    function dragOverHandler(e, Vidget) {
        e.preventDefault();
        e.target.style.border = '2px solid green';
    }
    function dragEndHandler(e, Vidget) {
        e.target.style.background = 'white';
    }
    function dropHandler(e, Vidget) {
        e.preventDefault();
        e.target.style.background = 'white';
        e.target.style.border = 'none';
        setCurrentVidgetList((oldList) => [...oldList, currentVidget]);
    }

    const sortVidgets = (a, b) => {
        if (a.order > b.order) {
            return 1;
        } else {
            return -1;
        }
    };

    return (
        <div className="wrapper">
            <VidgetList
                VidgetList={vidgetList}
                sortVidgets={sortVidgets}
                dragStartHandler={dragStartHandler}
                dragEndHandler={dragEndHandler}
                dropHandler={dropHandler}
            />
            <VidgetContainer
                currentVidgetList={currentVidgetList}
                VidgetList={vidgetList}
                sortVidgets={sortVidgets}
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
