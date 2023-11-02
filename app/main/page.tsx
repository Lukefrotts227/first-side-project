"use client"; 

import Form from '@/components/main/form';
import { Custom } from '@/components/main/custom';
import { Navbar } from '@/components/universal/navbar';
import { useState, useEffect } from 'react'; 

export default function Main(){
    const [canSeeSpecNav, setCanSeeSpecNav]: any = useState(0); 

    useEffect(() => {
        let can = sessionStorage.getItem('savedIdeas'); 
        if(can){
            setCanSeeSpecNav(1); 
        }else{
            setCanSeeSpecNav(0)
        }
    }, [])

    return(
        <main className="grid place-items-center">
            <header className="h-40 w-full">
                <Navbar type={canSeeSpecNav} />
            </header>

            <section className ="">
                <Form />
            </section>
            
            <section>
            </section>

            <section className= "">
                <Custom />
            </section>

            <footer></footer>

        </main>
    ); 
}