import { upgradeMain } from "@/helpers/openai/openmain";
import { NextRequest, NextResponse } from 'next/server'; 



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
        const data = await upgradeMain(content); 
        return NextResponse.json(data); 
    }catch(error){
        console.error(error); 
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})   
    }
    
}