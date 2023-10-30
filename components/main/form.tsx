import React, { useState } from 'react';
import { Router } from 'next/router'; 
const Form = () =>{
    const [content, setContent] = useState(''); 
    const [idea, setIdea] = useState(null);  
    const [loading, setLoading] = useState(false); 

    const generateIdea = async (e: React.MouseEvent<HTMLButtonElement>) => {
        setLoading(true);
        e.preventDefault();
        try {
            const response = await fetch('/api/main', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content }),
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
    
            const data = await response.json();
            console.log(data);
    
            setIdea(data.choices[0].message.content);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
        return(
        <div>
            <form className="flex flex-col gap-2">
                <label className="columns-lg text-center text-lg font-bold pb-5">Write me a bit about what you want to start a project with. You don't have to say much!</label>
                <input value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter it here" />
                <button onClick={generateIdea} disabled={loading}>Submit</button>
            </form>     
            {idea && <div>Generated idea: {idea} </div>}       
        </div>
    ); 
}
export default Form;