import React from 'react';
import Banner from './banner';
import Things from './things';
const MainContent = () => {
    return (
        <main>
            <div className="container">
                <Banner />
                <Things />
            </div>
        </main>
    );
};

export default MainContent;
