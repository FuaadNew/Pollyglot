import "./Body.css";
import { useState } from "react";
import OpenAI from "openai";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
const client = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey: apiKey,
});




const Body = () =>{
    
    const [text, setText] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    

    const handleTranslate = async () =>{
        const response = await client.responses.create({
            model: "gpt-3.5-turbo",
            input: text,
        });
        setTranslatedText(response.output_text);
        setText("");
    }
    return(
        <div className="body">
            <h1>Text to translate 👇</h1>
            <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text to translate" />
            <button onClick = {handleTranslate}>Translate</button>

            <h2>Select language</h2>
            <select>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="hi">Hindi</option>
                <option value="ar">Arabic</option>
                <option value="ja">Japanese</option>
                <option value="ko">Korean</option>
                <option value="ru">Russian</option>
                <option value="zh">Chinese</option>
                <option value="it">Italian</option>
            </select>
            <h1>Translated text 👇</h1>
            <textarea value={translatedText} placeholder="Translated text" />
        </div>
    )
}

export default Body;