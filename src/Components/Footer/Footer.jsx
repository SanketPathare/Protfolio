import "../Footer/Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4> Build by : Sanket Pathare </h4>
      <h4>2023 © All Rights Reserved. </h4>
      <div className="footerLinks">
        <a
          href="https://github.com/sanket8808"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sanket-pathare-740703245/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailTo:sanketpathare8808@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <GrMail />
        </a>
        <a
          href="https://leetcode.com/SanketPathare/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
