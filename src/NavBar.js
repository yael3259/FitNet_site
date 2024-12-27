// import "./NavBar.css";
// import { NavLink } from "react-router-dom";
// import { Context } from "./contexts";
// import F from './files/F.png';
// import email from './files/email.png';
// import { useState, useContext } from "react";



// // export const NavBar = ({ userRole }) => {
// export const NavBar = () => {

//     const ColorButton = () => {
//         const [showColorInput, setShowColorInput] = useState(false);
//         const userRole1 = localStorage.getItem("userRole");
//         // console.log(localStorage.getItem("userRole"));

//         const handleButtonClick = () => {
//             setShowColorInput(!showColorInput);
//         };

//         const handleColorChange = (e) => { };

//         return (
//             <div className="color-button">
//                 <button onClick={handleButtonClick}>
//                     <span className="arrow">&#9658;</span>
//                 </button>
//                 {showColorInput && (
//                     <input
//                         type="color"
//                         className="color-input"
//                         onChange={handleColorChange}
//                     />
//                 )}
//             </div>
//         );
//     };

//     let color = useContext(Context);

//     const handleColorChange = (e) => {
//         const newColor = e.target.value;
//         color.theFunc(newColor);

//         const links = document.querySelectorAll('.overlay-navbar');
//         links.forEach(link => {
//             link.style.color = newColor;
//             // link.style.backgroundColor = 'rgba(10, 10, 10, 0.37)';
//             link.style.backgroundColor = 'transparent';
//         });
//     };

//     let home = "https://cdn-icons-png.freepik.com/256/13956/13956008.png?ga=GA1.1.394280285.1712833522&";
//     let contact = "https://cdn-icons-png.freepik.com/256/10514/10514624.png?ga=GA1.1.394280285.1712833522&";
//     let cart = "https://cdn-icons-png.freepik.com/256/452/452371.png?ga=GA1.1.394280285.1712833522&";
//     let b = "https://cdn-icons-png.freepik.com/256/9425/9425533.png?ga=GA1.1.394280285.1712833522&";
//     let user = "https://cdn-icons-png.freepik.com/256/12259/12259393.png?ga=GA1.1.394280285.1712833522&";
//     let add = "https://cdn-icons-png.freepik.com/256/10969/10969590.png?ga=GA1.1.394280285.1712833522";
//     let update = "https://cdn-icons-png.freepik.com/256/6769/6769612.png?ga=GA1.1.394280285.1712833522&semt=ais_hybrid";
//     let deleteIcon = "https://cdn-icons-png.freepik.com/256/10969/10969305.png?ga=GA1.1.394280285.1712833522";
//     let adminIcon = "https://cdn-icons-png.freepik.com/128/8839/8839165.png";
//     let f = { F };

//     return (
//         <div class="navbar-container">
//             <br></br>
//             {/* {localStorage.getItem("userRole") === 'ADMIN' ? <span>ADMIN</span> : <span>USER</span>} */}

//             <div className="nav_con">
//                 <button className="color-button">
//                     <span>
//                         <img src={b} width={30} height={30} style={{ position: 'relative', top: '8px', left: '20px', right: '0px' }} />
//                     </span>
//                     <input type="color" className="nav_color-input" width={10} height={10} style={{ position: 'relative', top: '8px', left: '-20px' }} onChange={handleColorChange} />
//                 </button>

//                 <NavLink to="login" id="userLink" className="overlay-navbar" style={{ color: color.color }}>
//                     USER <img src={user} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
//                 </NavLink>

//                 <NavLink to="list" className="overlay-navbar" style={{ color: color.color }}>
//                     HOME <img src={home} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
//                 </NavLink>

//                 <NavLink to="cart" className="overlay-navbar" style={{ color: color.color }}>
//                     CART <img src={cart} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
//                 </NavLink>

//                 <NavLink to="contact" className="overlay-navbar" style={{ color: color.color }}>
//                     CONTACT <img src={email} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
//                 </NavLink>

//                 {/* admin */}

//                 {/* {userRole1 === 'ADMIN' && (
//                     <> */}

//                 {/* {localStorage.getItem("userRole") === 'ADMIN' ? <span>ADMIN</span> : <span>USER</span>} */}
//                 <NavLink to="addProduct" className="overlay-navbar" style={{ color: color.color }}>
//                     ADD <img src={add} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
//                 </NavLink>

//                 <NavLink to="update_product" className="overlay-navbar" style={{ color: color.color }}>
//                     UPDATE <img src={update} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
//                 </NavLink>

//                 <NavLink to="deleteProduct" className="overlay-navbar" style={{ color: color.color }}>
//                     DELETE <img src={deleteIcon} width={26} height={26} style={{ position: 'relative', top: '6.5px' }} />
//                 </NavLink>

//                 <NavLink to="adminPage" className="overlay-navbar" style={{ color: color.color }}>
//                     ADMIN <img src={adminIcon} width={26} height={26} style={{ position: 'relative', top: '6.5px' }} />
//                 </NavLink>
//                 {/* </>
//                 )} */}
//             </div>

//             <NavLink to="list" >
//                 <img src={F} className="nav_pic" width={130} height={55} style={{ position: 'relative', top: '0', right: '0' }} />
//             </NavLink>
//         </div>
//     )
// }






// import "./NavBar.css";
// import { NavLink } from "react-router-dom";
// import { Context } from "./contexts";
// import F from './files/F.png';
// import email from './files/email.png';
// import { useState, useContext, useEffect } from "react";

// export const NavBar = () => {
//     const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));

//     useEffect(() => {
//         const storedUserRole = localStorage.getItem("userRole");
//         setUserRole(storedUserRole);
//     }, []);    

//     const ColorButton = () => {
//         const [showColorInput, setShowColorInput] = useState(false);

//         const handleButtonClick = () => {
//             setShowColorInput(!showColorInput);
//         };

//         const handleColorChange = (e) => { };

//         return (
//             <div className="color-button">
//                 <button onClick={handleButtonClick}>
//                     <span className="arrow">&#9658;</span>
//                 </button>
//                 {showColorInput && (
//                     <input
//                         type="color"
//                         className="color-input"
//                         onChange={handleColorChange}
//                     />
//                 )}
//             </div>
//         );
//     };

//     let color = useContext(Context);

//     const handleColorChange = (e) => {
//         const newColor = e.target.value;
//         color.theFunc(newColor);

//         const links = document.querySelectorAll('.overlay-navbar');
//         links.forEach(link => {
//             link.style.color = newColor;
//             link.style.backgroundColor = 'transparent';
//         });
//     };

//     let home = "https://cdn-icons-png.freepik.com/256/13956/13956008.png?ga=GA1.1.394280285.1712833522&";
//     let contact = "https://cdn-icons-png.freepik.com/256/10514/10514624.png?ga=GA1.1.394280285.1712833522&";
//     let cart = "https://cdn-icons-png.freepik.com/256/452/452371.png?ga=GA1.1.394280285.1712833522&";
//     let b = "https://cdn-icons-png.freepik.com/256/9425/9425533.png?ga=GA1.1.394280285.1712833522&";
//     let user = "https://cdn-icons-png.freepik.com/256/12259/12259393.png?ga=GA1.1.394280285.1712833522&";
//     let add = "https://cdn-icons-png.freepik.com/256/10969/10969590.png?ga=GA1.1.394280285.1712833522";
//     let update = "https://cdn-icons-png.freepik.com/256/6769/6769612.png?ga=GA1.1.394280285.1712833522&semt=ais_hybrid";
//     let deleteIcon = "https://cdn-icons-png.freepik.com/256/10969/10969305.png?ga=GA1.1.394280285.1712833522";
//     let adminIcon = "https://cdn-icons-png.freepik.com/128/8839/8839165.png";
//     let f = { F };

//     return (
//         <div class="navbar-container">
//             <br></br>
//             {userRole}
//             <div className="nav_con">
//                 <button className="color-button">
//                     <span>
//                         <img src={b} width={30} height={30} style={{ position: 'relative', top: '8px', left: '20px', right: '0px' }} />
//                     </span>
//                     <input type="color" className="nav_color-input" width={10} height={10} style={{ position: 'relative', top: '8px', left: '-20px' }} onChange={handleColorChange} />
//                 </button>

//                 <NavLink to="login" id="userLink" className="overlay-navbar" style={{ color: color.color }}>
//                     USER <img src={user} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
//                 </NavLink>

//                 <NavLink to="list" className="overlay-navbar" style={{ color: color.color }}>
//                     HOME <img src={home} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
//                 </NavLink>

//                 <NavLink to="cart" className="overlay-navbar" style={{ color: color.color }}>
//                     CART <img src={cart} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
//                 </NavLink>

//                 <NavLink to="contact" className="overlay-navbar" style={{ color: color.color }}>
//                     CONTACT <img src={email} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
//                 </NavLink>

//                 {userRole === 'ADMIN' && (
//                     <>
//                         <NavLink to="addProduct" className="overlay-navbar" style={{ color: color.color }}>
//                             ADD <img src={add} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
//                         </NavLink>

//                         <NavLink to="update_product" className="overlay-navbar" style={{ color: color.color }}>
//                             UPDATE <img src={update} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
//                         </NavLink>

//                         <NavLink to="deleteProduct" className="overlay-navbar" style={{ color: color.color }}>
//                             DELETE <img src={deleteIcon} width={26} height={26} style={{ position: 'relative', top: '6.5px' }} />
//                         </NavLink>

//                         <NavLink to="adminPage" className="overlay-navbar" style={{ color: color.color }}>
//                             ADMIN <img src={adminIcon} width={26} height={26} style={{ position: 'relative', top: '6.5px' }} />
//                         </NavLink>
//                     </>
//                 )}
//             </div>

//             <NavLink to="list">
//                 <img src={F} className="nav_pic" width={130} height={55} style={{ position: 'relative', top: '0', right: '0' }} />
//             </NavLink>
//         </div>
//     );
// };

import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Context } from "./contexts";
import F from './files/F.png';
import email from './files/email.png';
import { useState, useContext, useEffect } from "react";

export const NavBar = () => {
    const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));
    const storedUserName = localStorage.getItem("userName");
    // const [userName, setUserName] = useState(localStorage.getItem("userName"));

    useEffect(() => {
        const storedUserRole = localStorage.getItem("userRole");
        setUserRole(storedUserRole);
    }, []);

    useEffect(() => {
        const handleStorageChange = () => {
            const storedUserRole = localStorage.getItem("userRole");
            setUserRole(storedUserRole);
        };
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

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

    let color = useContext(Context);

    const handleColorChange = (e) => {
        const newColor = e.target.value;
        color.theFunc(newColor);

        const links = document.querySelectorAll('.overlay-navbar');
        links.forEach(link => {
            link.style.color = newColor;
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
    let deleteIcon = "https://cdn-icons-png.freepik.com/256/10969/10969305.png?ga=GA1.1.394280285.1712833522";
    let adminIcon = "https://cdn-icons-png.freepik.com/128/8839/8839165.png";
    let f = { F };

    return (
        <div className="navbar-container">
            <br></br>
            {/* {userRole} */}
            <div className="nav_con">
                <button className="color-button">
                    <span>
                        <img src={b} width={30} height={30} style={{ position: 'relative', top: '8px', left: '20px', right: '0px' }} />
                    </span>
                    <input type="color" className="nav_color-input" width={10} height={10} style={{ position: 'relative', top: '8px', left: '-20px' }} onChange={handleColorChange} />
                </button>

                {/* <NavLink to="login" id="userLink" className="overlay-navbar" style={{ color: color.color }}>
                    USER <img src={user} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
                </NavLink> */}
                <NavLink to="login" id="userLink" className="overlay-navbar" style={{ color: color.color }}>
                    {storedUserName} <img src={user} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
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

                {userRole === 'ADMIN' && (
                    <>
                        <NavLink to="addProduct" className="overlay-navbar" style={{ color: color.color }}>
                            ADD <img src={add} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
                        </NavLink>

                        <NavLink to="update_product" className="overlay-navbar" style={{ color: color.color }}>
                            UPDATE <img src={update} width={25} height={25} style={{ position: 'relative', top: '6.5px' }} />
                        </NavLink>

                        <NavLink to="deleteProduct" className="overlay-navbar" style={{ color: color.color }}>
                            DELETE <img src={deleteIcon} width={26} height={26} style={{ position: 'relative', top: '6.5px' }} />
                        </NavLink>

                        <NavLink to="adminPage" className="overlay-navbar" style={{ color: color.color }}>
                            ADMIN <img src={adminIcon} width={26} height={26} style={{ position: 'relative', top: '6.5px' }} />
                        </NavLink>
                    </>
                )}
            </div>

            <NavLink to="list">
                <img src={F} className="nav_pic" width={130} height={55} style={{ position: 'relative', top: '0', right: '0' }} />
            </NavLink>
        </div>
    );
};
