import Logo from "@/components/graphics/logo"; 
import Title from "@/components/landing/title";
import { FaArrowRight } from 'react-icons/fa';
import Link from "next/link";


export default function Home() {
  return (
    <main className="grid grid-cols-9 gap-0">
      <header className="col-span-9 row-span-1 bg-gray-600">
        <div className="h-20">

        </div>
      </header>

      <section className="col-start-1 col-span-6 row-start-2 pb-24 flex flex-row"> 
        <div className="w-24">
          
        </div>
        <div>
          <Title />
          <div className="pb-12"></div>
          <div className="flex justify-center items-center">
            <Link href="/main">
              <FaArrowRight size ={111} />
            </Link>
          </div>
        </div>
        <div className="w-24">
          <Logo option={3} />
        </div>
      </section>

      

    </main>
  )
}
