import React, { useState } from 'react'; 
import { BiSolidDownArrowAlt } from 'react-icons/bi'; 


export const GenerateMap = () =>{
    const [isLoading, setIsLoading]: any = useState(false); 
    const [data, setData]: any = useState(null); 

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const mapGen = async() =>{
        try{
            setIsLoading(true); 
            const item: any  = sessionStorage.getItem('savedIdeas'); 
            const parsed: any = JSON.parse(item); 
            const content: any = `${parsed.title}:\n${parsed.description}`; 

            const response = await fetch('/api/further', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(content), 
                signal: controller.signal

            }); 
            if(!response.ok){
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const temp = await response.json(); 
            setData(JSON.parse(temp.choices[0].message.content)); 
        }catch(error){
            console.error(error); 
        }finally{
            setIsLoading(false); 
        }

    }
    

    return(
        <div className="flex flex-col items-center justify-center">
            <button className="text-center bg-slate-600 p-2 text-slate-100 shadow-2xl border-white border-2 rounded-sm hover:bg-slate-200 hover:text-slate-700 hover:font-bold mb-8"
            onClick={mapGen}>
            {isLoading ? 'Loading...' : 'Generate an roadmap'}</button>   
            {data ? (
                <ul className = " flex flex-col text-center items-center justify-center">
                    {data.process.map((step:any, index:any) => (
                        <div className ="w-2/5 m-4" key={index}>
                            <div className = "flex justify-center items-center">
                                <BiSolidDownArrowAlt size={55} />
                            </div>
                            <div className="bg-zinc-300 p-2">
                                <h3 className='p-6'>{step.process_step}</h3>
                                <p>{step.details}</p>
                            </div>
                        </div>
                                       
                    ))}
                </ul>
            ):(
                <>
                </>
            )
            }
        </div>   
    ); 
}