'use client'
import React from 'react';
import Navlink from './Navlink';
import Image from 'next/image';
import navlogo from'@/assets/user.png'
import Link from 'next/link';
import { authClient } from '@/libs/auth-client';
import { useRouter } from 'next/navigation';


const Navbar = () => {
  const router = useRouter()
  const { data: session } = authClient.useSession()
  console.log(session)
const links=<>
<Navlink href={'/'}>Home</Navlink>
<Navlink href={'/career'}>About</Navlink>
<Navlink href={'/about'}>Career</Navlink>

</>
const handlesighnout= async ()=> {
 

await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/category/01");
    },
  },
});
}
    return (
        <div>
           <div className="navbar container mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end flex  gap-2">
   {session?.user && <p>welcome {session.user.name}</p>}
    <Image
    src={navlogo}
    width={30}
    height={30}
    alt='nav'/>
   {session?.user
            ? <button onClick={handlesighnout} className="btn bg-[#403F3F] text-white font-semibold">Logout</button>
            : <Link href={'/login'} className="btn bg-[#403F3F] text-white font-semibold">Login</Link>
          }
  </div>
</div>
        </div>
    );
};

export default Navbar;