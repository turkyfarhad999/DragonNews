'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navlink = ({href,children}) => {
    const pathname=usePathname()
    const tf=pathname===href
   
    return (
        <Link className={`${tf?'border-b-2 ':''} mx-2 `} href={href}>{children}</Link>
    );
};

export default Navlink;