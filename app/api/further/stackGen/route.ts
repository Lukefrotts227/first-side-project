import { stackGen } from "@/helpers/openai/openmain";
import { NextResponse } from 'next/server'; 
import Ajv from "ajv";


export async function POST(request: Request){
    const body = await request.json(); 
    const content = body; 

    if(!content || typeof content !== 'string'){
        console.log("content not proper!!!"); 
        return NextResponse.json({ error: 'Internal Server Error'}, { status: 500}); 
    }
    try{
        const data = await stackGen(content); 
        return NextResponse.json(data); 
    }catch(error){
        console.error(error); 
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }

}