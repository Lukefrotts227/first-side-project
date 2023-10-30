import openai from "./config/openaiConfig";

export const main01 = async (content: string) =>{
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: `generate a project idea base on this user prompt\n${content}` }],
        model: "gpt-3.5-turbo",
        max_tokens: 600,

        temperature: .1,
    });
    return completion; 
}; 

console.log(main01("an entertainment application")); 

if(require.main === module){
    console.log(main01("An entertainment App"))
}