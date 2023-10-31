import openai from "./config/openaiConfig";
import * as dotenv from 'dotenv'; 

const para = `It must be a single sentence and short.`

export const main01 = async (content: string) =>{
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: `generate a project idea base on this user prompt.${para} \n${content}` }],
        model: "gpt-3.5-turbo",
        max_tokens: 600,

        temperature: .1,
    });
    return completion; 
}; 

export const upgradeMain = async(content: string) =>{
    const completion = await openai.chat.completions.create({
        messages:[{role:"system", content: "This chatbot returns json formatted app ideas"}, {role:"user", content:`${content}`}],
        model:'ft:gpt-3.5-turbo-0613:personal::8Fq5PV1M',
        max_tokens:600, 
        temperature: .1, 

    })
    return completion
}

console.log(main01("an entertainment application")); 

if(require.main === module){
    console.log(main01("An entertainment App"))
}