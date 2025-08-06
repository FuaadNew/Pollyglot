import "./Body.css";
import { useState } from "react";
import OpenAI from "openai";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
const client = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey: apiKey,
});




const Body = () =>{
    const [language, setLanguage] = useState("en");
    const [text, setText] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    

    const handleTranslate = async () =>{
        const response = await client.responses.create({
            model: "gpt-3.5-turbo",
            input: "Translate this text to " + text + " in " + language + "with proper grammar and punctuation and without any other text"
        });
        setTranslatedText(response.output_text);
        setText("");
    }
    return(
        <div className="body">
            <div className="translation-container">
                <div className="input-section">
                    <h1 className="section-title">Text to translate 📝</h1>
                    <textarea 
                        className="textarea"
                        value={text} 
                        onChange={(e) => {setText(e.target.value); setTranslatedText("")}} 
                        placeholder="Enter the text you'd like to translate..." 
                    />
                </div>

                <div className="controls">
                    <div>
                        <label className="language-label">Translate to:</label>
                        <select 
                            className="language-select"
                            value={language} 
                            onChange={(e) => setLanguage(e.target.value)}
                        >
                            <option value="en">🇺🇸 English</option>
                            <option value="es">🇪🇸 Spanish</option>
                            <option value="fr">🇫🇷 French</option>
                            <option value="de">🇩🇪 German</option>
                            <option value="hi">🇮🇳 Hindi</option>
                            <option value="ar">🇸🇦 Arabic</option>
                            <option value="ja">🇯🇵 Japanese</option>
                            <option value="ko">🇰🇷 Korean</option>
                            <option value="ru">🇷🇺 Russian</option>
                            <option value="zh">🇨🇳 Chinese</option>
                            <option value="it">🇮🇹 Italian</option>
                        </select>
                    </div>
                    
                    <button className="translate-button" onClick={handleTranslate}>
                        ✨ Translate
                    </button>
                </div>

                <div className="output-section">
                    <h1 className="section-title">Translation ✨</h1>
                    <textarea 
                        className="textarea output-textarea"
                        value={translatedText} 
                        placeholder="Your translation will appear here..." 
                        readOnly 
                    />
                </div>
            </div>
        </div>
    )
}

export default Body;