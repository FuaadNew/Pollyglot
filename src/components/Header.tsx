import headerimg from "../assets/headerimg.png";
import "./Header.css";

const Header = () =>{
    return (
        <div className="header">
            <div className = "header-image-container">
                <img src={headerimg} className="header-image" alt="headerimg" />
            </div>
        <>
        <h1>Pollyglot Translator</h1>
        <h2>Translate text from any language to any language</h2>
        </>
        </div>
    )
}

export default Header;