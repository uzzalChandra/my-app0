import "./navbar.css";
import homeImg from "../../img/Subtract.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {

const navigate = useNavigate();

const handleSearch = () => {
  navigate("/");
};

// const handleContact = () => {
//   navigate("/Contact");
// }

  return (
      <div className="homeContainer">
        <div className="homeSlider">
          <div className="logo-contact">
            <img className="homeImage" src={homeImg} alt="" />
            <span>u</span>
          </div>
          <ul className="homeList">
            <li onClick={handleSearch}>
              <a href="/"><span>Home</span></a>
            </li>
            <li>
              <a href="portfolio"><span>Portfolio</span></a>
            </li>
            <li>
              <a href="Services"><span>Services</span></a>
            </li>
            <li>
              <a href="/Contact"><span>Contact Us</span></a>
            </li>
            <li>
              <a href="/About"><span>About Us</span></a>
            </li>
          </ul>
          <button className="hireMe">
          <a href="/From">Hire Me</a>
          </button>
        </div>
      </div>
  );
};

export default Navbar;
