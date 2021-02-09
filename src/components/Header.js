import logo from "../assets/images/marvel-logo.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header-container">
      <img src={logo} alt="logo Marvel" className="logo-marvel" />
      <Link to={`/`}>
        <div className="navigation">Characters</div>
      </Link>
      <Link to={`/comics`}>
        <div className="navigation">Comics</div>
      </Link>
      <Link to={`/favorites`}>
        <div className="navigation">My favorites</div>
      </Link>
    </div>
  );
};

export default Header;
