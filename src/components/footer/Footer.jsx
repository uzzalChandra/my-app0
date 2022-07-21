/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="rows">
          <div className="box1">
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              quibusdam vero atque voluptas blanditiis ex!
            </p>
          </div>
          <div className="box1">
            <h4>Do you like? Share this!</h4>
            <p>
              <a href="#">
                <FaTwitter className="socialIcon" />
              </a>
              <a href="https://web.facebook.com/uzzal.soytan.3">
                <FaFacebook className="socialIcon" />
              </a>
              <a href="#">
                <FaInstagram className="socialIcon" />
              </a>
              <a href="https://github.com/uzzalChandra/uzzalChandra">
                <FaGithub className="socialIcon" />
              </a>
            </p>
            <p>
              <small>
                &cope; Untitled | Website created with
                <a
                  href="#"
                  className="linkLikeText"
                  title="Beautiful Free Images"
                >
                  Uzzal
                </a>
              </small>
            </p>
          </div>

          <div className="box1">
            <h4>Subscribe to newsletter</h4>
            <div className="subscribeGrop">
              <input
                type="email"
                className="formControl"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <button id="basic-addon2">
                ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
