// import { useState } from "react";
import { Link } from "react-scroll";
import { FaHome, FaFolder } from "react-icons/fa";
import { FcAbout, FcServices, FcFolder } from "react-icons/fc";
import "./NavbarMobile.css";

const NavbarMobile = () => {

	const iconSize = 30;
	// const iconColor = "";

	function Text({text}){
		return <p className="text_nav_item">{text}</p>
	}

	return (
		<div className="navbarMobile">
			<nav>
				<Link
					className="pointer link"
					to="hero"
					smooth={true}
					duration={1100}
				>
					<FaHome size={iconSize} />
					<Text text="Home" />
				</Link>
				<Link
					className="pointer link"
					to="session-about"
					smooth={true}
					duration={1100}
				>
					<FcAbout size={iconSize} />
					<Text text="About" />

				</Link>
				<Link
					className="pointer link"
					to="session-services"
					smooth={true}
					duration={1100}
				>
					<FcServices size={iconSize} />
					<Text text="Services" />
				</Link>
				<Link
					className="pointer link"
					to="session-projects"
					smooth={true}
					duration={1100}
				>
					<FcFolder size={iconSize} />
					<Text text="Portfolio" />
				</Link>
				<Link
					className="pointer link"
					to="session-skills"
					smooth={true}
					duration={1100}
				>
					<FaFolder size={iconSize} />
					<Text text="Skills" />
				</Link>
			</nav>
		</div>
	);
};

export default NavbarMobile;
