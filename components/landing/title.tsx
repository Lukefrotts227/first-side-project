import React from 'react'
import { Permanent_Marker } from "next/font/google"; 
const perm = Permanent_Marker({ subsets: ['latin'], weight: ['400'] })
import "@/styles/animations.css"
const Title = () =>{
    const titleVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const descriptionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } }
    };

    return(
        <div className="fadeIn">
            <h1 className={`text-center text-8xl pb-8 ${perm.className}`}>Side Project Pioneer</h1>
            <p className=" text-center text-lg font-light pb-6">We help you with your side project troubles</p>
            <p className="text-center text-md font-normal">I could not think of a good side project idea. So I made something to help with that</p>
        </div>
    ); 
}
export default Title; 