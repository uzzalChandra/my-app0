import "./header.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBed} from '@fortawesome/free-solid-svg-icons'
// import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import image from "../../img/Union-removebg-preview.png";
import imaged from "../../img/uzzal.png";

const Header = () => {
  return (
    <div className="contentContainer">
      <div className="contentBox">
        {/* <FontAwesomeIcon icon={faBed} />
      <FontAwesomeIcon icon={faCalendar} /> */}

        <div className="contentBoxLeft">
          <div className="contentDetails">
            <h3>Hello,my name is</h3>
            <h1>uzzal Chandra</h1>
            <h3>And I'm a</h3>
          </div>
        </div>
        <div className="contentBoxRight">
          <div className="rightContinuer">
            <div className="imgSlide">
            <img className="myImage" src={image} alt="" />
            <img className="myImaged" src={imaged} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
