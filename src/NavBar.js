import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { MyColorContext } from "./contexts";
import F from './files/F.png';
import  email from './files/email.png';
import { useContext } from "react";
import { useState } from "react";



export const NavBar = () => {

    const ColorButton = () => {
        const [showColorInput, setShowColorInput] = useState(false);

        const handleButtonClick = () => {
            setShowColorInput(!showColorInput);
        };

        const handleColorChange = (e) => { };

        return (
            <div className="color-button">
                <button onClick={handleButtonClick}>
                    <span className="arrow">&#9658;</span>
                </button>
                {showColorInput && (
                    <input
                        type="color"
                        className="color-input"
                        onChange={handleColorChange}
                    />
                )}
            </div>
        );
    };

    let color = useContext(MyColorContext);

    const handleColorChange = (e) => {
        const newColor = e.target.value;
        color.theFunc(newColor);

        const links = document.querySelectorAll('.overlay-navbar');
        links.forEach(link => {
            link.style.color = newColor;
            // link.style.backgroundColor = 'rgba(10, 10, 10, 0.37)';
            link.style.backgroundColor = 'transparent';
        });
    };

    let home = "https://cdn-icons-png.freepik.com/256/13956/13956008.png?ga=GA1.1.394280285.1712833522&";
    let contact = "https://cdn-icons-png.freepik.com/256/10514/10514624.png?ga=GA1.1.394280285.1712833522&";
    let cart = "https://cdn-icons-png.freepik.com/256/452/452371.png?ga=GA1.1.394280285.1712833522&";
    let b = "https://cdn-icons-png.freepik.com/256/9425/9425533.png?ga=GA1.1.394280285.1712833522&";
    let user = "https://cdn-icons-png.freepik.com/256/12259/12259393.png?ga=GA1.1.394280285.1712833522&";
    let add = "https://cdn-icons-png.freepik.com/256/10969/10969590.png?ga=GA1.1.394280285.1712833522";
    let update = "https://cdn-icons-png.freepik.com/256/6769/6769612.png?ga=GA1.1.394280285.1712833522&semt=ais_hybrid";
    let delet = "https://cdn-icons-png.freepik.com/256/10969/10969305.png?ga=GA1.1.394280285.1712833522";;


    return (
        <div class="navbar-container">
            <br></br>

            <button className="color-button">
                <span>
                    <img src={b} width={30} height={30} style={{ position: 'relative', top: '8px', left: '7px', right: '0px' }} />
                </span>
                <input type="color" className="color-input" width={10} height={10} style={{ position: 'relative', top: '8px', left: '-25px' }} onChange={handleColorChange} />
            </button>

                <NavLink to="login" id="not" className="overlay-navbar" style={{ color: color.color }}>
                    USER <img src={user} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
                </NavLink>
                
                <NavLink to="list" className="overlay-navbar" style={{ color: color.color }}>
                    HOME <img src={home} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
                </NavLink>
                
                <NavLink to="cart" className="overlay-navbar" style={{ color: color.color }}>
                    CART <img src={cart} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
                </NavLink>
                
                <NavLink to="contact" className="overlay-navbar" style={{ color: color.color }}>
                    CONTACT <img src={email} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
                </NavLink>

                {/* admin */}

                <NavLink to="addProduct" className="overlay-navbar" style={{ color: color.color }}>
                    ADD <img src={add} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
                </NavLink>

                <NavLink to="updateProduct" className="overlay-navbar" style={{ color: color.color }}>
                    UPDATE <img src={update} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
                </NavLink>

                <NavLink to="deleteProduct" className="overlay-navbar" style={{ color: color.color }}>
                    DELETE <img src={delet} width={26} height={26} style={{ position: 'relative', top: '6.5px' }} />
                </NavLink>

            <NavLink to="list" >
                <img src={F} className="pic" width={130} height={55} style={{ position: 'relative', top: '0', right: '0' }} />
            </NavLink>
        </div>
    )
}