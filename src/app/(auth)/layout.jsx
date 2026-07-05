import Header from '@/Components/Header';
import React from 'react';

const Authlayout = ({children}) => {
    return (
        <div>
             <Header></Header>
            {children}
        </div>
    );
};

export default Authlayout;