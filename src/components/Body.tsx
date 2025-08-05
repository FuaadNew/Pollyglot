import "./Body.css";

const Body = () =>{
    return(
        <div className="body">
            <h1>Text to translate 👇</h1>
            <textarea placeholder="Enter text to translate" />
            <button>Translate</button>
            <h1>Translated text 👇</h1>
            <textarea placeholder="Translated text" />
        </div>
    )
}

export default Body;