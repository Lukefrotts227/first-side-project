import openai from "./config/openaiConfig";

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
    return completion; 
}

export const howTo = async(content: string) => {
    const completition = await openai.chat.completions.create({
        messages:[{role:"system", content:"This chatbot takes app ideas and outputs the process of building it in proper json format"}, {role:"user", content:`${content}`}], 
        model:'ft:gpt-3.5-turbo-0613:personal::8Fx3JJyg',
        max_tokens:800, 
        temperature: .3,
    })
    return completition; 
}

export const stackGen = async(content: string) =>{
    const completion = await openai.chat.completions.create({
        messages:[{role: "system", content: "This chatbot returns a tech stack sorted into categories base on an app idea in proper JSON format"}, {role: "user", content: `${content}`}], 
        model: 'ft:gpt-3.5-turbo-0613:personal::8GEJLT5r',
        max_tokens:1200, 
        temperature: .3, 
    })
    return completion; 
}


if(require.main === module){
    console.log(main01("An entertainment App"))
}