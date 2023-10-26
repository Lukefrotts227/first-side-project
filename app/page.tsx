import { Oswald, Alumni_Sans_Collegiate_One } from "next/font/google"
const oswald = Oswald({ subsets: ['latin'] })
const alumni_sans_collegiate_one = Alumni_Sans_Collegiate_One({ subsets: ['latin-ext'], weight: ['400'] })

export default function Home() {

  return (
    <main className="flex-col items-center justify-between p-24">
      <header>
        <h1 className={`text-center text-7xl pb-14 ${oswald.className}`}>Welcome to my application</h1>
        <h2 className={`text-center text-4xl ${alumni_sans_collegiate_one.className}`}>I am testing fonts</h2>
      </header>

    </main>
  )
}
