import { useState } from "react";
import { Link } from "react-scroll";
import { MdHome, MdPermIdentity, MdWork, MdList, MdViewQuilt  } from "react-icons/md";

import "./NavbarMobile.css";

const NavbarMobile = () => {
  const [visibility, setVisibility] = useState("visible");

	const iconSize = 30;
	// const iconColor = "";

	function Text({text}){
		return <p className="text_nav_item">{text}</p>
	}


	 window.onscroll = () => {
    let scrollPosition = window.pageYOffset;

    if (scrollPosition > 700) {
      setVisibility("hidden");
    } else {
      setVisibility("visible");
    }
  };


	return (
		<div className={`navbarMobile ${visibility}`}>
			<nav>
				<Link
					className="pointer link"
					to="hero"
					smooth={true}
					duration={1100}
				>
					<MdHome size={iconSize} />
					<Text text="Home" />
				</Link>
				<Link
					className="pointer link"
					to="session-about"
					smooth={true}
					duration={1100}
				>
					<MdPermIdentity size={iconSize} />
					<Text text="About" />

				</Link>
				<Link
					className="pointer link"
					to="session-services"
					smooth={true}
					duration={1100}
				>
					<MdViewQuilt size={iconSize} />
					<Text text="Services" />
				</Link>
				<Link
					className="pointer link"
					to="session-projects"
					smooth={true}
					duration={1100}
				>
					<MdWork size={iconSize} />
					<Text text="Portfolio" />
				</Link>
				<Link
					className="pointer link"
					to="session-skills"
					smooth={true}
					duration={1100}
				>
					<MdList size={iconSize} />
					<Text text="Skills" />
				</Link>
			</nav>
		</div>
	);
};

export default NavbarMobile;
