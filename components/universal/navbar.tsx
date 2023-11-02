import React from 'react'; 
import Link from 'next/link';

export const Navbar = ({ type = 0}) =>{

    if(type === 0){

        return(
            <nav className= "bg-gray-800 text-white p-4">
                <div className = "container mx-auto flex justify-between">
                    <Link href="/">
                        <button className ='mx-5'>Landing</button>
                    </Link>
                    <Link href="/main">
                        <button className ='mx-5'>Main page</button>
                    </Link>
                </div>
            </nav>
        )
    }else if(type===1){
        return(
            <nav className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/">
                        <button className='mx-5'>Landing</button>
                    </Link>
                    <Link href="/main">
                        <button className='mx-5'>Main page</button>
                    </Link>  
                    <Link href="/further">
                        <button className='mx-5'>Delve deeper into your idea</button>
                    </Link>                  
                    <Link href="/ask">
                        <button className='mx-5'>Discuss more</button>
                    </Link>                
                </div>    
            </nav>
        )
    }
}