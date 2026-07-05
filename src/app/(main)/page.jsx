import Header from '@/Components/Header';
import Left from '@/Components/Left';
import Middle from '@/Components/Middle';
import Navbar from '@/Components/Navbar';
import {  category } from '@/Func/fetch';
import { redirect } from 'next/navigation'
import React from 'react';

const Page = async() => {
    const datacat= await category()
    console.log(datacat)
    
   
        
          redirect(`/category/${datacat[0].category_id}`)
        
    
};

export default Page;