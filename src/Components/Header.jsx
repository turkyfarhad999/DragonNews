import React from 'react';
import headimage from '@/assets/logo.png'
import Image from 'next/image';
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='container mx-auto text-center space-y-2 my-3 '>
            <Image className='mx-auto' src={headimage}
             width={400}
             height={200}
             alt='turky'/>
             <p className='font-normal text-[#706F6F]'>Journalism Without Fear or Favour</p>
             <p className='font-normal text-[#706F6F]'>
                <span className='font-semibold text-black'>{format(new Date(), "EEEE")}</span>,
                {format(new Date(), " MMM dd,yyyy")}</p>
        </div>
    );
};

export default Header;