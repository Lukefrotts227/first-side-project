import React from 'react'; 
import Link from 'next/link';

export const Navbar = ({ type: any = 0}) =>{

    return(
        <nav className= "bg-gray-800 text-white p-4">
            <div className = "container mx-auto flex justify-between items-center">
                <Link href="/">
                    <button>Landing</button>
                </Link>
                <Link href="/main">
                    <button>Main page</button>
                </Link>
            </div>
        </nav>
    )
}