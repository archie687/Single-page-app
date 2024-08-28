import React, { useEffect, useRef, useState } from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const userInfoRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [username, setUsername] = useState<string | null>(null);
  const [showUserInfo, setShowUserInfo] = useState(false);
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
    
    const handleClickOutside = (event: MouseEvent) => {
      if (userInfoRef.current && !userInfoRef.current.contains(event.target as Node)) {
        setShowUserInfo(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleIconClick = () => {
    setShowUserInfo(!showUserInfo);
  };

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink 
            to="/home" 
            className={({ isActive }: { isActive: boolean }) => (isActive ? 'active-link' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }: { isActive: boolean }) => (isActive ? 'active-link' : '')}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }: { isActive: boolean }) => (isActive ? 'active-link' : '')}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="user-info">
        <FontAwesomeIcon icon={faUser} onClick={handleIconClick} className="cursor-pointer" />
        <div  ref={userInfoRef} className={`user-div ${showUserInfo ? 'visible' : ''}`}>
          <div className="top">
         
            {showUserInfo && username && <p className='user-name'>Welcome, {username}!</p>}
          </div>
          <div className="bottom">
            <button onClick={handleSignOut}>Sign out</button>
          </div>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
