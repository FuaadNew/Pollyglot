import "./Body.css";
import { useState } from "react";


const Body = () =>{
    const [text, setText] = useState("");
    const [translatedText, setTranslatedText] = useState("");

    const handleTranslate = () =>{
        setTranslatedText(text);
    }
    return(
        <div className="body">
            <h1>Text to translate 👇</h1>
            <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text to translate" />
            <button onClick = {handleTranslate}>Translate</button>
            <h1>Translated text 👇</h1>
            <textarea value={translatedText} placeholder="Translated text" />
        </div>
    )
}

export default Body;