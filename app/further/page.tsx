"use client"; 
import { Display } from "@/components/further/display";
import { GenerateMap } from "@/components/further/generatemap";

export default function Further(){

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