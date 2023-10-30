"use client"; 

import Form from '@/components/main/form';

export default function Main(){


    return(
        <main className="grid">
            <header className="h-40"></header>

            <section className ="grid place-items-center">
                <Form />
            </section>

            <section></section>

            <footer></footer>

        </main>
    ); 
}