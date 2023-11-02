import { upgradeMain } from "@/helpers/openai/openmain";
import { NextResponse } from 'next/server'; 
import Ajv from "ajv";

const ajv = new Ajv(); 

const ideaSchema = {
    type: "object",
    properties: {
      title: { type: "string" },
      description: { type: "string" },
    },
    required: ["title", "description"], // Both title and description are required
    additionalProperties: false // No additional properties are allowed
  };
  
const validate = ajv.compile(ideaSchema); 

function validateIdeas(ideas:any) {
    if(!Array.isArray(ideas)){
        return false; 
    }
    for(const idea of ideas){
        const valid = validate(idea); 
        if(!valid){
            return false; 
        }
    }
    return true; 
}



export async function POST(request: Request){
    const body = await request.json(); 

    const content = body; 
    console.log(body); 
    console.log(content);

    if(!content || typeof content !== 'string'){
        console.log("content not proper!!!"); 
        return NextResponse.json({ error: 'Internal Server Error'}, { status: 500}); 
         
    }

    try {
        //const data = await main01(content); 
        let valid = false; 
        let data : any ; 
        while(!valid){
            data = await upgradeMain(content); 
            valid = validateIdeas(JSON.parse(data.choices[0].message.content)); 
        }
        return NextResponse.json(data); 
    }catch(error){
        console.error(error); 
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})   
    }
    
}