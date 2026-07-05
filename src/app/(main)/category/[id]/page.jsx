
import Left from '@/Components/Left';
import Middle from '@/Components/Middle';
import Right from '@/Components/Right';
import { category } from '@/Func/fetch';
import { redirect } from 'next/dist/server/api-utils';

import React from 'react';

const page = async({params}) => {
    const {id }=await params
    console.log(id)
    const datacat=await  category()
    return (
         <div className='container mx-auto grid md:grid-cols-12 my-5'>
            <div className='col-span-1 md:col-span-3 w-full'>
    <h2 className='font-semibold my-2'>All categories</h2>
    <div className='flex flex-wrap md:flex-col gap-1 w-full'>
        {datacat.map(dc => <Left dc={dc} key={dc.category_id}></Left>)}
    </div>
</div>
            <div className='col-span-1 md:col-span-6'>
            <Middle id={id}>
                
            </Middle>
            </div>
            <div className='col-span-1 md:col-span-3'>
                <Right></Right>
            </div>
            
        </div>
    );
};

export default page;