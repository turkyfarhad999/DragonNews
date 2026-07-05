import Right from '@/Components/Right';
import { exactNews } from '@/Func/fetch';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = async({params}) => {
    const {id}= await params;
    
   const data= await exactNews(id)
   console.log(data)
    return (
        <div className='grid grid-cols-3 container mx-auto gap-6 '>
             <div className='col-span-2'>
                <h2 className='font-semibold text-2xl my-3'>Dragon news</h2>
            <Image 
            src={ data.image_url}
            width={1000}
            height={800}
            alt='turky'/>
            <h2 className='font-semibold text-3xl my-3'>{data.title}</h2>
            <h2 className='text-[#706F6F]'>{data.details}</h2>
            <Link href={`/category/${data.category_id}`} className='btn my-2 bg-[#D72050] text-[#FFFFFF]'>All news in this category ...</Link>
            </div>
            <div>
                <Right></Right>
            </div>
        </div>
    );
};

export default page;