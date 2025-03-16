import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { ColorContext } from "./contexts/color_context";
import F from './files/F.png';
import email from './files/email.png';
import { useUserContext } from "./contexts/user_context";
import { useState, useContext, useEffect } from "react";


export const NavBar = () => {
    const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));
    const [userName, setUserName] = useState(localStorage.getItem("userName"));
    const [activeLink, setActiveLink] = useState("");
    const [url, setUrl] = useState(localStorage.getItem("url") || "https://cdn-icons-png.freepik.com/256/12259/12259393.png");
    const { user } = useUserContext();
    let color = useContext(ColorContext);

    let home = "https://cdn-icons-png.freepik.com/256/13956/13956008.png?ga=GA1.1.394280285.1712833522&";
    let cart = "https://cdn-icons-png.freepik.com/256/452/452371.png?ga=GA1.1.394280285.1712833522&";
    let b = "https://cdn-icons-png.freepik.com/256/9425/9425533.png?ga=GA1.1.394280285.1712833522&";
    let add = "https://cdn-icons-png.freepik.com/256/10969/10969590.png?ga=GA1.1.394280285.1712833522";
    let update = "https://cdn-icons-png.freepik.com/256/6769/6769612.png?ga=GA1.1.394280285.1712833522&semt=ais_hybrid";
    let deleteIcon = "https://cdn-icons-png.freepik.com/256/10969/10969305.png?ga=GA1.1.394280285.1712833522";
    let defaultImage = "https://cdn-icons-png.freepik.com/256/12259/12259393.png";
    let adminIcon = "https://cdn-icons-png.freepik.com/128/8839/8839165.png";


    const handleLinkClick = (path) => {
        setActiveLink(path);
    };


    const handleColorChange = (e) => {
        const newColor = e.target.value;
        color.theFunc(newColor);

        const links = document.querySelectorAll('.overlay-navbar');
        links.forEach(link => {
            link.style.color = newColor;
            link.style.backgroundColor = 'transparent';
        });
    };

    return (
        <div className="navbar-container">
            <br></br>
            <div className="nav_con">
                <button className="color-button">
                    <span>
                        <img src={b} width={30} height={30} style={{ position: 'relative', top: '8px', left: '20px', right: '0px' }} alt="" />
                    </span>
                    <input type="color" className="nav_color-input" width={10} height={10} style={{ position: 'relative', top: '8px', left: '-20px' }} onChange={handleColorChange} alt="" />
                </button>


                <NavLink
                    to="/login"
                    className={`overlay-navbar ${activeLink === "login" ? "active-link" : ""}`} id="userLink"
                    onClick={() => handleLinkClick("login")}
                    style={{ color: color.color }}>
                    {user ? `${user.userName}` : "GUEST"}
                    
                    {user.url? 
                    <img src={user.url} width={25} height={25} style={{ position: 'relative', top: '6.5px', left: '6px' }} alt="" id="urlPicUser"/>
                    : <img src={defaultImage} width={25} height={25} style={{ position: 'relative', top: '6.5px', left: '6px' }} alt="" id="urlPicUser" />
                    }
                </NavLink>

                <NavLink
                    to="/list"
                    className={`overlay-navbar ${activeLink === "list" ? "active-link" : ""}`}
                    onClick={() => handleLinkClick("list")}
                    style={{ color: color.color }} 
                >
                    HOME <img src={home} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} alt="" />
                </NavLink>

                <NavLink
                    to="/cart"
                    className={`overlay-navbar ${activeLink === "cart" ? "active-link" : ""}`}
                    onClick={() => handleLinkClick("cart")}
                    style={{ color: color.color }}
                >
                    CART <img src={cart} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} alt="" />
                </NavLink>

                <NavLink
                    to="/contact"
                    className={`overlay-navbar ${activeLink === "contact" ? "active-link" : ""}`}
                    onClick={() => handleLinkClick("contact")}
                    style={{ color: color.color }} alt=""
                >
                    CONTACT <img src={email} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} alt="" />
                </NavLink>


                {/* {userRole === 'ADMIN' && ( */}
                {user.userRole === 'ADMIN' && (
                    <>
                        <NavLink
                            to="/addProduct"
                            className={`overlay-navbar ${activeLink === "addProduct" ? "active-link" : ""}`}
                            onClick={() => handleLinkClick("addProduct")}
                            style={{ color: color.color }} 
                        >
                            ADD
                            <img src={add} width={25} height={25} style={{ position: 'relative', top: '6.5px', left: '5px' }} alt="" />
                        </NavLink>

                        <NavLink
                            to="/update_product"
                            className={`overlay-navbar ${activeLink === "update_product" ? "active-link" : ""}`}
                            onClick={() => handleLinkClick("update_product")}
                            style={{ color: color.color }} 
                        >
                            UPDATE
                            <img src={update} width={25} height={25} style={{ position: 'relative', top: '6.5px', left: '5px' }} alt="" />
                        </NavLink>

                        <NavLink
                            to="/deleteProduct"
                            className={`overlay-navbar ${activeLink === "deleteProduct" ? "active-link" : ""}`}
                            onClick={() => handleLinkClick("deleteProduct")}
                            style={{ color: color.color }} 
                        >
                            DELETE
                            <img src={deleteIcon} width={26} height={26} style={{ position: 'relative', top: '6.5px', left: '5px' }} alt="" />
                        </NavLink>

                        <NavLink
                            to="/adminPage"
                            className={`overlay-navbar ${activeLink === "adminPage" ? "active-link" : ""}`}
                            onClick={() => handleLinkClick("adminPage")}
                            style={{ color: color.color }}
                        >
                            ADMIN
                            <img src={adminIcon} width={26} height={26} style={{ position: 'relative', top: '6.5px', left: '5px' }} alt="" />
                        </NavLink>
                    </>
                )}
            </div>
            
            <NavLink to="/list">
                <img src={F} className="nav_pic" width={130} height={55} style={{ position: 'relative', top: '0', right: '0' }} alt="" />
            </NavLink>
        </div>
    );
};






