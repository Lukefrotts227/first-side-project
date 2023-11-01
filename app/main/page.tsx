"use client"; 

import Form from '@/components/main/form';
import { Custom } from '@/components/main/custom';

export default function Main(){


    return(
        <main className="grid place-items-center">
            <header className="h-40"></header>

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