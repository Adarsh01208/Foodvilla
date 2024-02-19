import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const linkStyle = { textDecoration: 'none', color: 'inherit' };

  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container ">
        <div className="row  text-center">
          <div className="col-md-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" style={linkStyle}>About us</Link></li>
              <li><Link to="/team" style={linkStyle}>Team</Link></li>
              <li><Link to="/careers" style={linkStyle}>Careers</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li><Link to="/help" style={linkStyle}>Help & Support</Link></li>
              <li><Link to="/partner" style={linkStyle}>Partner with us</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><Link to="/terms" style={linkStyle}>Terms & Conditions</Link></li>
              <li><Link to="/privacy" style={linkStyle}>Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Social</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com" style={linkStyle}>Facebook</a></li>
              <li><a href="https://www.twitter.com" style={linkStyle}>Twitter</a></li>
              <li><a href="https://www.instagram.com" style={linkStyle}>Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()}<Link className='text-decoration-none' to="https://github.com/Adarsh01208" > @Adarsh01208</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;