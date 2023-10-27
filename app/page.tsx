import Logo from "@/components/graphics/logo"; 
import { Permanent_Marker } from "next/font/google"; 
const perm = Permanent_Marker({ subsets: ['latin'], weight: ['400'] })

export default function Home() {

  return (
    <main className="grid justify-between p-24">
      <header>
      </header>

      <section className="place-items-center"> 
        <h1 className={`text-center text-7xl ${perm.className}`}>Side Project</h1>
      </section>

      <section>
      </section>
      

    </main>
  )
}
