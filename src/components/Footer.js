import React from "react";
import { Card } from "react-bootstrap";
import './Footer.css'
const Footer = () => {
  return (
    <Card>
      <Card.Footer className="text-muted footer-container">Made by Sama</Card.Footer>
      <Footer>put at bottom</Footer>
    </Card>
    // <div className="footer"> Hello this is footer</div>
  );
};

export default Footer;