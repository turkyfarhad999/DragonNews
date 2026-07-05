import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import playground from '@/assets/class.png'
import swim from '@/assets/swimming.png'
import classs from '@/assets/playground.png'

const Right = () => {
    return (
        <div className='space-y-4'>
            <div className='px-5'>
                <h2 className='font-bold text-2xl my-3'>Login with</h2>
                <div className='flex flex-col gap-2'>
                <button className='btn text-sky-300 border border-sky-300' > <FaGoogle /> login with Google</button>
                <button className='btn text-gray-600 border   border-gray-600'><FaGithub />login with Github</button>
                </div>
            </div>
            <div className='px-5'>
              <h2 className='font-bold text-2xl my-3'>Find us on</h2>
              <div className='flex flex-col '>
                <button className='btn h-14 '><FaFacebookF className='text-blue-600' />Facebook</button>
                <button className='btn h-14'><FaTwitter className='text-sky-500'/>Twitter</button>
                <button className='btn h-14'><FaInstagram className='text-[#D82D7E]' />Instagram</button>
              </div>
            </div>
            <div className='  bg-gray-200 mx-5  px-5 rounded-2xl'>
              <h2 className='font-bold text-2xl my-3'>Q-zone</h2>
              <Image className=' mx-auto'
              src={playground}
              width={300}
              height={300}
              alt='playground'/>
              <Image className=' mx-auto' 
              src={swim}
              width={300}
              height={300}
              alt='playground'/>
              <Image className=' mx-auto'
              src={classs}
              width={300}
              height={300}
              alt='playground'/>
            </div>
        </div>
    );
};

export default Right;