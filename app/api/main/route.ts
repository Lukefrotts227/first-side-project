import { main01 } from "@/helpers/openai/openmain";



const handler =  async (req: any, res: any) =>{
    const { content } = (req.body); 
    console.log(req.body); 
    console.log(content); 
    console.log('Request:', req);
    console.log('Response:', res);



    if (!content || typeof content !== 'string') {
        console.log("here"); 
        res.status(400); 
        return;
    }

    try{
       const data = await main01(content); 
       res.status(200).json(data); 
    } catch(error){
        console.error(error); 
        //res.status(500).json({ error: 'Internal Server Error' });
    }
}; 



export const POST = handler;