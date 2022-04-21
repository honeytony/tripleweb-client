import React from 'react';
import DragTable from '../components/constructor/dragTable';

import HeaderContent from '../components/headerContent';

function ConstructorPage() {
    return (
        <>
            <HeaderContent text={'Конструктор'} user={'Administrator'} />
            <DragTable />
        </>
    );
}

export default ConstructorPage;
