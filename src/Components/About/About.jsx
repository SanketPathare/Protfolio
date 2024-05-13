import "../About/About.css";
import Skills from "../Skills/Skills";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../../LottieFiles/coder1.json";
import Education from "../Education/Education";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Sanket Pathare</b> and I am from pune, India. Im a{" "}
            <b>Full stack web developer</b> and a third year college student
            pursuing <b>BTech in CSE</b>. <br />
            <br />I have done an internship as a <b>software developer</b> at
            GoalFi which is a finTech startup. I love to create original
            projects with beautiful designs, you can check out some of my work
            in the projects section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
            Apart from coding I love to do photography, you can check out some
            of my shots here
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Web-<b>Skills</b></h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Javascript" />
        <Skills skill="Node" />
        <Skills skill="React" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Postman" />
        <Skills skill="Figma" />
        <Skills skill="Vercel" />
        <Skills skill="Bootstrap" />
        <Skills skill="vite" />
        <Skills skill="Express" />
      </div>
      <Education/>
    </>
  );
};

export default About;
