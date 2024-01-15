import { GrView } from "react-icons/gr";


const ProjectBox = ({ projectPhoto , projectName }) => {
  const desc = {
    // TripFlyDesc:
    //   "A travel website is a website that provides travel reviews, trip fares, or a combination of both .If you are looking to write a tour description for your website, you can follow these tips to make it more engaging and persuasive innovative.",
    // TripFlyWebsite: "https://tripfly-in.vercel.app/",

    // TindogDesc:
    //   "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",

    // TindogWebsite: "",

    // RogFreeDesc:
    //   "A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.",

    // RogFreeWebsite: "",

    // NewsletterDesc:
    //   "A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",

    // NewsletterWebsite: "",
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
