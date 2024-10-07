
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";

const  ProjectBox = ({projectPhoto , projectName}) => {
  const desc = {
    GeminiGithub : "https://github.com/SanketPathare/gemini-clone",
    GeminiWebsite : "https://gemini-clone-ivory.vercel.app/",

    
   ElectroMartGithub : "https://github.com/SanketPathare/E-Commerce",
   ElectroMartWebsite : "https://e-commerce-gilt-pi.vercel.app/",

   CryptoAppGithub : "https://github.com/SanketPathare/CryptoApp",
   CryptoAppWebsite : "https://crypto-app-iota-flame.vercel.app/",

   TripflyGithub : "https://github.com/SanketPathare/-Tripfly.in",
   TripflyWebsite : "https://tripfly-in.vercel.app/",

   TalkWithAIGithub : "https://github.com/SanketPathare/ai-text-gen",
   TalkWithAIyWebsite : "https://ai-text-gen.vercel.app/",
   
   ImageGeneratorGithub : "https://github.com/SanketPathare/ai-img",
   ImageGeneratorWebsite : "https://ai-img-tan.vercel.app/image-generator",

   AutoNotesGithub : "https://github.com/SanketPathare/autonotes",
   AutoNotesWebsite : "https://auto-notes.netlify.app/#/notes",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
  return (
    <div className='projectBox'> 
    <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
    <div>
        <br />
        <h3>{projectName}</h3>

        <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'  rel="noreferrer">
          <button className='projectbtn'><FaGithub/> Github</button>
        </a>

        <a href={desc[projectName + 'Website']} target='_blank'  rel="noreferrer">
          <button className='projectbtn'><CgFileDocument/>View</button>
        </a>
    </div>
</div>
  );
};

export default ProjectBox;
