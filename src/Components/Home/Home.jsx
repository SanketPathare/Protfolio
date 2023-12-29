import Pdf from "../../assets/Sanket_Resume.pdf";
// import Lottie from "lottie-react";
// import Boy from "../../LottieFiles/user-interface.json";
import Typed from "../Typed/Typed";
import Tilt from "react-parallax-tilt";
import Avatar from "../../images/Avatar.png";
import { CiCoffeeCup } from "react-icons/ci";
import "../Home/Home.css";
// import { Link } from "react-router-dom";
import boy from "../../LottieFiles/man2.png";
import { MdTextSnippet } from "react-icons/md";
import { LuContact2 } from "react-icons/lu";


const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I`M <b>SANKET PATHARE</b>
          </h1>
          <Typed />
          <button className="btn">
            <a href={Pdf} download={true} target="_blank">
              Download CV <MdTextSnippet  className="btn_logo"/>
            </a>
          </button>
          <button className="btn">
            <a href="mailTo:sanketpathare8808@gmail.com" target="_blank">
              Contact < LuContact2 className="btn_logo"/>
            </a>
          </button>
        </div>
        <Tilt>
        <img className="illustration" src={boy} alt="" />

        </Tilt>

        {/* <Lottie className="illustration" animationData={Boy} loop={true} /> */}
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            I love the process of changing a raw idea into a website or a
            product that impacts lives. I want to do work that challenges me as
            a developer & work that I can be proud of.
            <br />
            <br />I am fluent in <b>C++</b> and know a bit of <b>Python</b> and
            am working on a few projects in the <b>MERN</b> stack.
            <br />I plan to learn <b>Next.js</b>, <b>Three.js</b> and
            <b> Typescript</b> in the near future. <br />
            <br />
            Also, I love <b>coffee</b>{" "}
            <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
