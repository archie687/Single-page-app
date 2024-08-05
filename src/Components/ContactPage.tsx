import React, { ChangeEvent, useState, FormEvent } from 'react';
import { Button } from '@mui/material';
import Msg from './msg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faHackerrank, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const ContactPage: React.FC = () => {
  const [gender, setGender] = useState<string>('');

  const handleGenderChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setGender(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Selected gender:', gender);
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
            <input type="text" className="field" placeholder="Enter your Name" required />
          </div>
          <div className="input-box-contact">
            <label>Number</label>
            <input type="number" className="field" placeholder="Enter your Phone Number" required />
          </div>
          <div className="input-box-contact">
            <label>Email</label>
            <input type="email" className="field" placeholder="Enter your Email" required />
          </div>
          <div className="input-box-contact">
            <label>Address</label>
            <input type="text" className="field" placeholder="Enter your Address" required />
          </div>
          
          <div>
           
            <div className="input-box-contact">
            Gender
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  placeholder='select gender'
                  checked={gender === 'male'}
                  onChange={handleGenderChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={handleGenderChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={gender === 'other'}
                  onChange={handleGenderChange}
                />
                Other
              </label>
            </div>
           
          </div>
          
          <div className="input-box-contact">
            <label>Message</label>
            <textarea className="field-mess" placeholder="Type your Message" required></textarea>
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
      <FontAwesomeIcon icon={faHackerrank} style={{color: "#77cfb5",fontSize:'2rem'}} />
      <FontAwesomeIcon icon={faYoutube} style={{color: "#fe4848",fontSize:'2rem'}} />
      <FontAwesomeIcon icon={faLinkedin} style={{color: "#286ee6",fontSize:'2rem'}} />
      <FontAwesomeIcon icon={faDiscord} style={{color: "#9b7bf9",fontSize:'2rem'}} />
      </div>
    </div>
  );
};

export default ContactPage;
