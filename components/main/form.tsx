import React, { useState } from 'react';
import { useRouter } from 'next/router'; 


const Form = () =>{
    const [content, setContent] = useState(''); 
    const [ideas, setIdeas] = useState([]);  
    const [text, setText] = useState(''); 
    const [isLoading, setIsLoading] = useState(false); 

    


    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const onItemClick = (idea :any) =>{
        const storedIdeas = JSON.parse(sessionStorage.getItem('savedIdeas') || '[]');
        // Add the new idea to the array
        storedIdeas.push(idea);
        // Store the updated array back in session storage
        sessionStorage.setItem('savedIdeas', JSON.stringify(storedIdeas));
       
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
    
            setIdeas(JSON.parse(data.choices[0].message.content));
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
            {ideas && 
            <ul>{ideas.map((idea:any, index:any) => (
                <li key={index} onClick={() => onItemClick(idea)}>
                    <div className="flex items-center justify-center"> 
                        <div className="bg-gray-500 rounded-2xl shadow-md border-white border-2 w-3/5 text-center">
                            <h1>{idea.title}</h1>
                            <p>{idea.description}</p>
                        </div> 
                    </div>
                </li>
                ))}
            </ul>  
            }       
        </div>
    ); 
}
export default Form;