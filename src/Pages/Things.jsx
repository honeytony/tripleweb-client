import MainContent from '../components/mainContent';
import HeaderContent from '../components/headerContent';

import React from 'react';
function Things() {
    return (
        <>
            <HeaderContent text={'Вещи'} user={'Administrator'} />
            <MainContent />
        </>
    );
}

export default Things;
