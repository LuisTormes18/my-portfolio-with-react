import { Link } from "react-scroll";
import {
  MdHome,
  MdPermIdentity,
  MdWork,
  MdList,
  MdViewQuilt,
} from "react-icons/md";

import "./NavbarMobile.css";

function Text({ text }) {
  return <p className="text_nav_item">{text}</p>;
}

const NavbarMobile = () => {
  const iconSize = 30;
  const iconColor = "#282c34"

  return (
    <div className="navbarMobile">
      <nav>
        <Link className="pointer link" to="hero" smooth={true} duration={1100}>
          <MdHome size={iconSize} color={iconColor}/>
          <Text text="Home" />
        </Link>
        <Link
          className="pointer link"
          to="session-about"
          smooth={true}
          duration={1100}
        >
          <MdPermIdentity size={iconSize}  color={iconColor} />
          <Text text="About" />
        </Link>
        <Link
          className="pointer link"
          to="session-services"
          smooth={true}
          duration={1100}
        >
          <MdViewQuilt size={iconSize}  color={iconColor} />
          <Text text="Services" />
        </Link>
        <Link
          className="pointer link"
          to="session-projects"
          smooth={true}
          duration={1100}
        >
          <MdWork size={iconSize}  color={iconColor} />
          <Text text="Portfolio" />
        </Link>
        <Link
          className="pointer link"
          to="session-skills"
          smooth={true}
          duration={1100}
        >
          <MdList size={iconSize}  color={iconColor}/>
          <Text text="Skills" />
        </Link>
      </nav>
    </div>
  );
};

export default NavbarMobile;
