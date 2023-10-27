import Link from 'next/link'; 


export default function Main(){


    return(
        <main className="grid">
            <header className="h-40"></header>

            <section className ="grid place-items-center border-blue-200 p-3">
                <form className="flex flex-col gap-2">
                    <label className="columns-lg text-center text-lg font-bold pb-5">Write me a bit about what you want to start a project with. You don't have to say much!</label>
                    <textarea />
                    <button>Submit</button>
                </form>
            </section>

            <section></section>

            <footer></footer>

        </main>
    ); 
}