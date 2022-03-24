import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function NavbarIcons() {
  const iconSize = 30;
  const iconColor = "#f1f1f1";

  return (
    <ul className="d-flex justify-content-center gap-3  ">
      <li>
        <a
          href="https://www.linkedin.com/in/luis-angel-tormes-aguilera"
          aria-hidden="true"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={iconSize} color={iconColor} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/luistormes_oficial/"
          aria-hidden="true"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={iconSize} color={iconColor} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/LuisTormes18"
          aria-hidden="true"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={iconSize} color={iconColor} />
        </a>
      </li>
    </ul>
  );
}

export default NavbarIcons;
