import { OpenAI } from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

const key: string | undefined = process.env.OPENAI_API_KEY;

if (!key) {
    throw new Error('No OpenAI API key provided');
}

const openai = new OpenAI({ apiKey: key });

export default openai;