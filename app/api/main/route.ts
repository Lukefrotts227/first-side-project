import { main01 } from "@/helpers/openai/openmain";
import { NextApiRequest, NextApiResponse } from 'next'; 



const handler = async (req: NextApiRequest, res: NextApiResponse) =>{
    const { content } = req.body; 
    console.log(content); 


    if (!content || typeof content !== 'string') {
        console.log("here"); 
        res.status(400).json({ error: 'Invalid input' });
        return;
    }
    console.log('Request:', req);
    console.log('Response:', res);

    try{
       const data = await main01(content); 
       res.status(200).json(data); 
    } catch(error){
        console.error(error); 
        //res.status(500).json({ error: 'Internal Server Error' });
    }
}; 



export const POST = handler;