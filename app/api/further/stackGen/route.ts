import { stackGen } from "@/helpers/openai/openmain";
import { NextResponse } from 'next/server'; 
import Ajv from "ajv";

const ajv = new Ajv({allErrors: true}); 

const technologySchema = {
    type: "object",
    properties: {
      techname: { type: "string" },
      description: { type: "string" },
      use: { type: "string" },
    },
    required: ["techname", "description", "use"],
    additionalProperties: false,
};
  
  // Define the schema for the data structure containing technology sections
  const dataStructureSchema = {
    type: "object",
    patternProperties: {
      "^.+$": {
        type: "array",
        items: technologySchema,
      },
    },
    additionalProperties: false,
};

const validateDataStructure = ajv.compile(dataStructureSchema);

function validateTechnologySections(data :any ){
    const valid = validateDataStructure(data); 
    if(!valid){
        return false; 
    }
    return true; 
}
  


export async function POST(request: Request){
    const body = await request.json(); 
    const content = body; 

    if(!content || typeof content !== 'string'){
        console.log("content not proper!!!"); 
        return NextResponse.json({ error: 'Internal Server Error'}, { status: 500}); 
    }
    try{
        let valid = false; 
        let data : any ; 
        let count = 0; 
        while(!valid && count < 7){
            data = await stackGen(content);
            console.log(JSON.parse(data.choices[0].message.content)); 
            valid = validateTechnologySections(JSON.parse(data.choices[0].message.content)); 
            count++; 
        }
        return NextResponse.json(data); 
    }catch(error){
        console.error(error); 
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }

}