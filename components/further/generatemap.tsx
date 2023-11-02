import React, { useState } from 'react'; 
import { BiSolidDownArrowAlt } from 'react-icons/bi'; 

interface Technology {
    techname: string;
    description: string;
    use: string;
  }
  
  interface TechnologySectionProps {
    title: string;
    technologies: Technology[];
  }

  interface DataStructure {
    [key: string]: Technology[];
  }
  

  const TechnologySection: React.FC<TechnologySectionProps> = ({ title, technologies }) => {
    return ( // Here's the return statement that was missing
      <div className="text-center">
        <h2 className="text-3xl font-extrabold pb-9">{title}</h2>
        {technologies.map((tech, index) => (
          <div className="bg-gray-300 mb-5" key={index}>
            <h3 className="text-2xl pb-3">{tech.techname}</h3>
            <p className="text-md pb-2 border-2 m-2">{tech.description}</p>
            <p className="text-md border-2 m-2">Usage: {tech.use}</p>
          </div>
        ))}
      </div>
    );
  };


export const GenerateMap = () =>{
    const [isLoading, setIsLoading]: any = useState(false); 
    const [isStack, setIsStack]: any = useState(false); 
    const [data, setData]: any = useState(null); 

    const [selectedStack, setSelectedStack] = useState<Technology[]>([]); 
    const [selectedMap, setSelectedMap] = useState<any[]>([]); 
   

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const storeMap = (map: any[]) =>{
        setSelectedMap(map); 

        sessionStorage.setItem('selectedMap', JSON.stringify(map)); 
        alert("success"); 
    }

    const storeStack = (tech : Technology[]) =>{
        setSelectedStack(tech); 
        sessionStorage.setItem('selectedStack', JSON.stringify(tech))
        alert("success")
    }

    const stackGen = async() =>{
        try {
            setIsLoading(true); 
            const item: any  = sessionStorage.getItem('savedIdeas'); 
            const parsed: any = JSON.parse(item); 
            const content: any = `${parsed.title}:\n${parsed.description}`;
            
            const response = await fetch('/api/further/stackGen', {
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
            // Assuming temp.choices[0].message.content is a JSON string that can be parsed to Technology[]
            const parsedData = JSON.parse(temp.choices[0].message.content) as DataStructure;
            setIsStack(true);
            setData(parsedData);

        }catch(error){
            console.error(error); 
        }finally{
            setIsLoading(false); 
        }
    }

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
            setIsStack(false); 
        }catch(error){
            console.error(error); 
        }finally{
            setIsLoading(false); 
        }

    }


    

    return(
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row gap-6">
                <button className="text-center bg-slate-600 p-2 text-slate-100 shadow-2xl border-white border-2 rounded-sm hover:bg-slate-200 hover:text-slate-700 hover:font-bold mb-8"
                onClick={mapGen}>
                {isLoading ? 'Loading...' : 'Generate an roadmap'}</button>   
                <button className="text-center bg-slate-600 p-2 text-slate-100 shadow-2xl border-white border-2 rounded-sm hover:bg-slate-200 hover:text-slate-700 hover:font-bold mb-8"
                onClick={stackGen}>
                {isLoading ? 'Loading...' : 'Generate a tech stack'}</button>
            </div>

            {data ? (

                isStack ? (
                    <div className ="flex flex-col items-center justify-center">
                        <button className="p-2 mb-4 bg-slate-950 text-zinc-50 shadow-2xl rounded-2xl border-white hover:bg-zinc-50 hover:text-slate-950 hover:font-bold"
                        onClick={() => storeStack(data)}>Store this Stack</button>
                        <div className="flex flex-row gap-5 pb-3 px-9">
                        {Object.entries(data).map(([sectionTitle, technologies], index) => (
                            <TechnologySection key={index} title={sectionTitle} technologies={technologies as Technology[]} />
                        ))}
                        
                        </div>
                    </div>
                ) 
                : 
                (
                <div className ="flex flex-col items-center justify-center">
                    <button className="p-2 mb-4 bg-slate-950 text-zinc-50 shadow-2xl rounded-2xl border-white hover:bg-zinc-50 hover:text-slate-950 hover:font-bold"
                    onClick={() => storeMap(data.process)}>Store this Roadmap</button>
                    <ul className = " flex flex-col text-center items-center justify-center">
                        {data.process.map((step:any, index:any) => (
                            <div className ="w-2/5 m-4" key={index}>
                                <div className = "flex justify-center items-center">
                                    <BiSolidDownArrowAlt size={55} />
                                </div>
                                <div className="bg-zinc-300 p-2">
                                    <h3 className='p-6'>{step.step}</h3>
                                    <p>{step.details}</p>
                                </div>
                            </div>
                                        
                        ))}
                    </ul>
                </div>
                )
                
            )
            :
            (
                <>
                </>
            )
            }
        </div>   
    ); 
}