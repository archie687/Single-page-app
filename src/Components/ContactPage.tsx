import React, { ChangeEvent, useState, FormEvent } from 'react';
import { Button } from '@mui/material';
import Msg from './msg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faHackerrank, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    number: '',
    email: '',
    address: '',
    gender: '',
    message: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleGenderChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData(prevState => ({
      ...prevState,
      gender: e.target.value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    console.log('Form data:', formData);

    try {
      const response = await fetch('https://testurl.com/contactme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const jsonData = await response.json();
      console.log('API response:', jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="contact-main">
      <div className="contact-left">
        <img className="contact-img" src={Msg} alt="Contact" />
      </div>
      
      <div className="contact-right">
        <form onSubmit={handleSubmit}>
          <h3>Get in Touch</h3>
          
          <div className="input-box-contact">
            <label>Full Name</label>
            <input 
              type="text" 
              name="fullName" 
              className="field" 
              placeholder="Enter your Name" 
              required 
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-box-contact">
            <label>Number</label>
            <input 
              type="number" 
              name="number" 
              className="field" 
              placeholder="Enter your Phone Number" 
              required 
              value={formData.number}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-box-contact">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              className="field" 
              placeholder="Enter your Email" 
              required 
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-box-contact">
            <label>Address</label>
            <input 
              type="text" 
              name="address" 
              className="field" 
              placeholder="Enter your Address" 
              required 
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="input-box-contact">
            <label>Gender</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleGenderChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleGenderChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === 'other'}
                  onChange={handleGenderChange}
                />
                Other
              </label>
            </div>
          </div>
          
          <div className="input-box-contact">
            <label>Message</label>
            <textarea 
              name="message"
              className="field-mess" 
              placeholder="Type your Message" 
              required
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="button-container">
            <Button
              className="login-btn"
              style={{ marginTop: '2rem', borderRadius: '18px', background: 'linear-gradient(to right, #6dd5ed, #cc2b5e)', width: '50%' }}
              type="submit"
              variant="contained"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>

      <div className="contact-icons">
        <p style={{color:'grey'}}>You can reach me:</p>
        <FontAwesomeIcon icon={faHackerrank} style={{color: "#77cfb5", fontSize:'2rem'}} />
        <FontAwesomeIcon icon={faYoutube} style={{color: "#fe4848", fontSize:'2rem'}} />
        <FontAwesomeIcon icon={faLinkedin} style={{color: "#286ee6", fontSize:'2rem'}} />
        <FontAwesomeIcon icon={faDiscord} style={{color: "#9b7bf9", fontSize:'2rem'}} />
      </div>
    </div>
  );
};

export default ContactPage;
