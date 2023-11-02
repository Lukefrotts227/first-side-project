import React, { useState } from 'react'; 
import { useRouter } from 'next/navigation'

// Storage { savedIdeas: '{"title":"Virtual Race Competitor","description":"Join virtual races and compete with runners from around the world."}', length: 1 }
// Storage { savedIdeas: '[{"title":"Walking helper","description":"A project to track walking habits"}]', length: 1 }
export const Custom = ()=>{
    const [title, setTitle]: any = useState(''); 
    const [description, setDescription]: any = useState(''); 
    const router = useRouter(); 


    const handleKeyDown = (e: any) =>{
        if(e.key === "Enter" && !e.shiftKey){
            handleSubmit(e);  
            
        }
    }

    const handleSubmit = (e: any) =>{
        e.preventDefault()
        if(description === '' || title === ''){
            alert("must have information in the Title and description")
            return; 
        }
        sessionStorage.clear(); 
        const buildIdea: any = { title, description }; 

        const savedIdeaString = JSON.stringify(buildIdea); 

        sessionStorage.setItem('savedIdeas', savedIdeaString); 
        router.push('/further'); 
        return; 
    }
    
    return(
        <div className ="">
            <h1 className="font-bold text-center text-xl my-5 px-16">If you have an idea enter it here:</h1>
            <form className="flex flex-col bg-gradient-to-tr from-neutral-500 to-zinc-700 gap-2 p-5 border-black shadow-lg rounded-xl">
                <h1 className="text-zinc-100 text-center text-xl font-bold pb-3">Give me an idea!!</h1>
                <div className="my-2 flex flex-col justify-center items-center">
                    <label className="text-zinc-100 text-center">Title</label>
                    <input type="text" className="w-1/2" placeholder="Enter the Title" value={title} onChange={(e) => setTitle(e.target.value)} id="title"></input>
                </div>
                <div className='my-3 flex flex-col'>
                    <label className="w-full text-zinc-100 text-center">Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="h-12 text-base rounded-md border-2" 
                    onKeyDown={handleKeyDown} placeholder="Enter your Project description" id="descript"></textarea>
                </div>
                <div className="flex items-center justify-center">
                    <button onClick={handleSubmit} className="bg-zinc-900 text-slate-100 hover:bg-zinc-300 hover:text-black hover:font-bold px-5 py-1 mb-3 mt-2 rounded-2xl w-1/2 cursor-pointer"
                    >submit</button>
                </div>
            </form>
        </div>
    ); 
}