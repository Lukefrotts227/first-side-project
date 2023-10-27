import Logo from "@/components/graphics/logo"; 
import { Permanent_Marker } from "next/font/google"; 
const perm = Permanent_Marker({ subsets: ['latin'], weight: ['400'] })

export default function Home() {

  return (
    <main className="grid grid-cols-9 gap-0">
      <header className="col-span-9 row-span-1">
        <div className="w-40 h-40">

        </div>
      </header>

      <section className="col-start-1 col-span-6 row-start-2 pb-24 flex flex-row"> 
        <div className="w-24">

        </div>
        <div>
          <h1 className={`text-center text-8xl pb-8 ${perm.className}`}>Side Project Pioneer</h1>
          <p className=" text-center text-lg font-light">We help you with your side project troubles</p>
        </div>
        <div className="w-24">
          <Logo option={3} />
        </div>
      </section>
      

    </main>
  )
}
