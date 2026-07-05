import { catagoryNews } from '@/Func/fetch';
import React from 'react';
import Middlenewsbox from './Middlenewsbox';
import Nomiddledata from './Nomiddledata';

const Middle = async({id}) => {
    const news= await catagoryNews(id)
    console.log(news)
    return (
        <div className='p-3'>
            {news.length!==0?news.map((n,i)=><Middlenewsbox n={n} key={i}></Middlenewsbox>):<Nomiddledata></Nomiddledata>}
        </div>
    );
};

export default Middle;