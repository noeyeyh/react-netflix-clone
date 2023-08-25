import React, { useEffect, useState } from 'react';
import "./Nav.css"

export default function Nav() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log('window.scrollY', window.scrollY);
            if(window.scrollY > 50) {
                setShow(true);
            } else {
                setShow(false);
            }
        })
 
        return () => {
            window.removeEventListener("scroll", () => {})
        };
    }, []);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
        <img
            alt='Netflix logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Netflix-Logo.png/512px-Netflix-Logo.png"
            className='nav__logo'
            onClick={() => window.location.reload()}
        />
        <img
            alt="User logged"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            className="nav__avatar"
        />
    </nav>
  )
}