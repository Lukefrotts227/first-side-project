"use client"; 
import { Display } from "@/components/further/display";
import { GenerateMap } from "@/components/further/generatemap";

export default function Further(){
    if(!sessionStorage.getItem('savedIdeas')){
        return(
            <main>
                <section className="text-center text-6xl m-12 font-extrabold">You must have an Idea to be here!!!</section>
            </main> )
    }

    return(
        <main>
            <header className="h-28">
            </header>

            <section className='pb-16'>
                <Display />
            </section>

            <section>
                <GenerateMap />
            </section>
        
        </main>
        )
}