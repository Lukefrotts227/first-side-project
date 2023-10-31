import openai from "../config/openaiConfig";


async function startFineTuning(){
    try{
        const training_file = "data/introtest"; 

        const response = await openai.fineTuning.jobs.create({
            training_file, 

            model:"gpt-3.5-turbo"
        })

        console.log("finsihed tuning"); 

        return response.id; 
    }catch(error){
        console.error(error); 
        throw error; 
    }
}