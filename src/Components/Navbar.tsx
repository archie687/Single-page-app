import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string | null>(null);
  const [showUserInfo, setShowUserInfo] = useState(false);
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
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
          <Link to="/home">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

      <div className="user-info">
        <FontAwesomeIcon icon={faUser} onClick={handleIconClick} className="cursor-pointer" />
        <div className={`user-div ${showUserInfo ? 'visible' : ''}`}>
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
