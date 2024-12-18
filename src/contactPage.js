import React, { useState } from "react";
import "./contactPage.css";



export const Contact = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isFullnameFocused, setIsFullnameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isMessageFocused, setIsMessageFocused] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const handleFocus = (setter) => () => {
    setter(true);
  };

  const handleBlur = (setter) => () => {
    setter(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!fullname || !email || !message) {
      setErrorMessage("Please fill out all fields.");
      setSuccessMessage('');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      setSuccessMessage('');
      return;
    }

    setErrorMessage('');
    setSuccessMessage('');

    setSuccessMessage('Your message has been successfully sent!');
    setFullname('');
    setEmail('');
    setMessage('');
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  return (
    <div className="contact_page">
      <div className="container_con">
        <div className="cf" onSubmit={handleSubmit}>
          <p className="title_con">Send us a massage</p>
          <label htmlFor="fullname" className="con_details1"></label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            onFocus={handleFocus(setIsFullnameFocused)}
            onBlur={handleBlur(setIsFullnameFocused)}
            className={isFullnameFocused ? "focused" : ""}
          />

          <label htmlFor="email" className="con_details1"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleFocus(setIsEmailFocused)}
            onBlur={handleBlur(setIsEmailFocused)}
            className={isEmailFocused ? "focused" : ""}
          />

          <label htmlFor="message" className="con_details1"></label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={handleFocus(setIsMessageFocused)}
            onBlur={handleBlur(setIsMessageFocused)}
            className={isMessageFocused ? "focused" : ""}
          ></textarea>

          {/* <div className="con_container">
            <input type="submit" value="submit" />
          </div> */}
          <div className="con_container">
            <button type="submit" className="submit-button">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      </div>


      <div class="con_details">
        <p className="con_tytle">CONTACT US</p>
        <h1><i class="fas fa-phone icon"></i>Call us <span class="s">(+972) 52-760-7424</span></h1>
        <h1><i class="fas fa-map-marker-alt icon"></i>Our location <span class="s">Yehuda HaNasi, El'ad, Israel</span></h1>
        <h1><i class="fas fa-envelope icon"></i>Email <span class="s">yael3259@gmail.com</span></h1>
      </div>

    </div>
  );
};
