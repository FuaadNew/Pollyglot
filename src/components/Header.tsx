import headerimg from "../assets/headerimg.png";
import "./Header.css";

const Header = () =>{
    return (
        <div className="header">
            <img src={headerimg} alt="headerimg" />
        <>
        <h1>Pollyglot Translator</h1>
        <h2>Translate text from any language to any language</h2>
        </>
        </div>
    )
}

export default Header;