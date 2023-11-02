import { howTo } from "@/helpers/openai/openmain";
import { NextResponse } from 'next/server'; 
import Ajv from "ajv";

const ajv = new Ajv({ allErrors: true });

// Define the schema for a single process step
const processStepSchema = {
  type: "object",
  properties: {
    step: { type: "string" },
    details: { type: "string" },
  },
  required: ["step", "details"],
  additionalProperties: false,
};

// Define the schema for the data structure that contains an array of process steps
const processDataStructureSchema = {
  type: "object",
  properties: {
    process: {
      type: "array",
      items: processStepSchema,
    },
  },
  required: ["process"],
  additionalProperties: false,
};

// Compile the schema
const validateProcessDataStructure = ajv.compile(processDataStructureSchema);

function validateProcessData(data: any) {
  // This assumes that `data` is the object you want to validate
  const valid = validateProcessDataStructure(data);
  if (!valid) {
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
        let count =0; 
        while(!valid && count < 8){
            data = await howTo(content);
            valid = validateProcessData(JSON.parse(data.choices[0].message.content)); 
            count++; 
        }
        return NextResponse.json(data); 
    }catch(error){
        console.error(error); 
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }

}