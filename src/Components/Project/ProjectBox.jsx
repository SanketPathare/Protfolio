import { GrView } from "react-icons/gr";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    TripFlyWebsite: "https://tripfly-in.vercel.app/",

    TindogWebsite: "",

    RogFreeWebsite: "",

    NewsletterWebsite: "",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3 className="project_name">{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          className="view"
          rel="noreferrer"
          href={desc[projectName + "Website"]}
          target="_blank"
        >
          <button className="projectbtn">
            <GrView /> View
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
