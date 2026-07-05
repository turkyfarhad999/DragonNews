
import Link from 'next/link';
import React from 'react';

const Left = ({dc}) => {
    
    return (
        <div className=' flex flex-col my-2 border-none shadow-none'>
            <Link href={`/category/${dc.category_id}`} className=' bg-gray-200 text-center px-2 py-2 rounded-sm font-semibold'>{dc.category_name}</Link>
        </div>
    );
};

export default Left;