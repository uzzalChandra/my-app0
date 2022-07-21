/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "./contacts.css";

const Contacts = () => {
  return (
    <div className="csContainer">
      <div className="csRefer">
        <div className="csRow">
          <h1>Contact Me</h1>
          <div className="csContentRaper">
            <div className="csLeft">
              <span>name</span>
              <h3>Freelancer Uzzal</h3>
              <span>Email</span> 
              <h4>
                <a href="uzzalchandra2@gmail.com">uzzalchandra2@gmail.com</a>
              </h4>
              <div className="textBox">
                <span>Massage</span>
                <br />
                <textarea
                  type="text"
                  name="text"
                  id="massage"
                  placeholder="Hi, I'm uzzal full Stack web developer"
                />
                <br />
                <button>Send</button>
              </div>
            </div>
            <div className="csRight">
              <div className="addName">
                <FaMapMarkerAlt className="icon" />
                <p>Mymenshing, Dhaka, Bangladesh</p>
              </div>
              <div className="addName">
                <FaPhoneAlt className="icon" />
                <p>+88801647494379</p>
              </div>
              <div className="cLink">
                <a href="#">
                  <FaFacebookF className="fLink" />
                </a>
                <a href="#">
                  <FaTwitter className="fLink" />
                </a>
                <a href="#">
                  <FaInstagram className="fLink" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
