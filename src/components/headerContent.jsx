import React from 'react';

const HeaderContent = ({ text, user }) => {
    return (
        <div className="header">
            <h1>{text}</h1>
            <div className="profile">
                <span>{user}</span>
                <div className="icon iconUser"></div>
            </div>
        </div>
    );
};

export default HeaderContent;
