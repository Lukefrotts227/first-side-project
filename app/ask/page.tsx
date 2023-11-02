"use client"; 

import { Navbar } from "@/components/universal/navbar";
import { useState, useEffect } from 'react'; 


export default function Ask(){
    const [canSee, setCanSee]: any = useState(true); 

    useEffect(() => {
        let can = sessionStorage.getItem('savedIdeas'); 
        if(can){
            setCanSee(true); 
        }else{
            setCanSee(false)
        }
    }, [])

    if(!canSee){
        return(
            <main>
                <section className="text-center text-6xl m-12 font-extrabold">You must have an Idea to be here!!!</section>
            </main> )
    }

    return(
        <main>
            <header className="h-2- w-full">
                <Navbar type={1} />
            </header>
        </main>
        );
}