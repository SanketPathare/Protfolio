import {
  FaReact,
  FaGitAlt,
  FaGithub,
  
  FaFigma,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVercel,
  SiVitess,
} from "react-icons/si";

import "../Skills/Skills.css";

const Skills = ({ skill }) => {
  const icon = {
    Postman: <SiPostman />,
    Javascript: <DiJavascript1 />,
    React: <FaReact />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    
    Figma: <FaFigma />,
    Bootstrap: <FaBootstrap />,
    Vercel: <SiVercel />,
    vite: <SiVitess />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
