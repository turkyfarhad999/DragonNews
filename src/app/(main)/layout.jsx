import Header from '@/Components/Header';
import Marcu from '@/Components/Marcu';
import Navbar from '@/Components/Navbar';
import React from 'react';

const Mainlayout = ({children}) => {
    return (
        <div>
           
            <Header></Header>
            <Marcu></Marcu>
             <Navbar></Navbar>
            {children}
        </div>
    );
};

export default Mainlayout;