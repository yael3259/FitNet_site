import React, { useState } from "react";
import "./contactPage.css";



export const Contact = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isFullnameFocused, setIsFullnameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isMessageFocused, setIsMessageFocused] = useState(false);

  const handleFocus = (setter) => () => {
    setter(true);
  };

  const handleBlur = (setter) => () => {
    setter(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="b">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname" className="tt">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Your full name.."
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            onFocus={handleFocus(setIsFullnameFocused)}
            onBlur={handleBlur(setIsFullnameFocused)}
            className={isFullnameFocused ? "focused" : ""}
          />

          <label htmlFor="email" className="tt">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your email.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleFocus(setIsEmailFocused)}
            onBlur={handleBlur(setIsEmailFocused)}
            className={isEmailFocused ? "focused" : ""}
          />

          <label htmlFor="message" className="tt">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write something.."
            style={{ height: '200px' }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={handleFocus(setIsMessageFocused)}
            onBlur={handleBlur(setIsMessageFocused)}
            className={isMessageFocused ? "focused" : ""}
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
      <p className="p1">CONTACT US</p>

      <div className="details">
        <h1 className="header1">Call us <br></br> <span className="s">(+972) 52-760-7424</span></h1>
        <h1 className="header1">Our location <br></br> <span className="s" >Israel, El'ad Yehuda HaNasi</span></h1>
        <h1 className="header1">Email <br></br> <span className="s">yael3259@gmail.com</span></h1>
      </div>
    </div>
  );
};
