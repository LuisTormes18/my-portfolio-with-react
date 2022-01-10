import { useState } from "react";
import { Link } from "react-scroll";
import { FaHome, FaFolder } from "react-icons/fa";
import { FcAbout, FcServices, FcFolder } from "react-icons/fc";
import "./NavbarMobile.css";

const NavbarMobile = () => {
	
	const iconSize = 35;
	const iconColor = "";
	
	return (
		<div className="navbarMobile">
			<nav>
				<Link
					className="pointer"
					to="hero"
					smooth={true}
					duration={1100}
				>
					<FaHome size={iconSize} />
				</Link>
				<Link
					className="pointer"
					to="session-about"
					smooth={true}
					duration={1100}
				>
					<FcAbout size={iconSize} />
				</Link>
				<Link
					className="pointer"
					to="session-services"
					smooth={true}
					duration={1100}
				>
					<FcServices size={iconSize} />
				</Link>
				<Link
					className="pointer"
					to="session-projects"
					smooth={true}
					duration={1100}
				>
					<FcFolder size={iconSize} />
				</Link>
				<Link
					className="pointer"
					to="session-skills"
					smooth={true}
					duration={1100}
				>
					<FaFolder size={iconSize} />
				</Link>
			</nav>
		</div>
	);
};

export default NavbarMobile;
