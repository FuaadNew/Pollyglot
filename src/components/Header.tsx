import headerimg from "../assets/headerimg.png";
import "./Header.css";

const Header = () =>{
    return (
        <div className="header">
            <div className="header-content">
                <div className="header-image-container">
                    <img src={headerimg} className="header-image" alt="Global communication" />
                </div>
                <h1>PollyGlot</h1>
                <h2>Perfect Translation Every Time</h2>
            </div>
        </div>
    )
}

export default Header;