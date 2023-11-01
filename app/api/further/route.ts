import { howTo } from "@/helpers/openai/openmain";
import { NextResponse } from 'next/server'; 

export async function POST(request: Request){
    const body = await request.json(); 
    const content = body; 

    if(!content || typeof content !== 'string'){
        console.log("content not proper!!!"); 
        return NextResponse.json({ error: 'Internal Server Error'}, { status: 500}); 
    }
    try{
        const data = await howTo(content); 
        console.log(data.choices[0].message.content); 
        return NextResponse.json(data); 
    }catch(error){
        console.error(error); 
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }

}