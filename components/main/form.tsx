import React, { useState } from 'react';
import { useRouter } from 'next/router'; 


const Form = () =>{
    const [content, setContent] = useState(''); 
    const [ideas, setIdeas] = useState(null);  
    const [text, setText] = useState(''); 
    const [isLoading, setIsLoading] = useState(false); 


    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const deStringify = (object : any) =>{
        return; 
    }

    const handleKeyDown = (e: any) =>{
        if(e.key === "Enter" && !e.shiftKey){
            generateIdea(e); 
            
        }
    }


    const generateIdea = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            setIsLoading(true); 
            const response = await fetch('/api/main', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(content),
                signal: controller.signal
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
    
            const data = await response.json();
            console.log(data);
    
            setIdeas(data.choices[0].message.content);
        } catch (error) {
            console.error(error);
        } finally{
            setIsLoading(false); 
        }
    }
    
        return(
        <div>
            <form className="flex flex-col gap-2 items-center justify-center pb-12">
                <label className="columns-lg text-center text-lg font-bold pb-5">Write me a bit about what you want to start a project with. You don't have to say much!</label>
                <textarea className="w-full h-11 border-2 border-gray-300 rounded-md text-base" 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter it here"
                onKeyDown={handleKeyDown}
                disabled={isLoading} />
                <button
                disabled={isLoading} 
                className="bg-slate-700 w-24 shadow-md border-white text-slate-50 rounded-2xl hover:bg-slate-950 hover:font-extrabold" onClick={generateIdea}>
                {isLoading ? 'Loading...' : 'Submit'}
                </button>
            </form>     
            {ideas && <div className="flex items-center justify-center"> <div className="bg-gray-500 rounded-2xl shadow-md border-white border-2 w-3/5">Generated idea: {ideas} </div> </div>}       
        </div>
    ); 
}
export default Form;