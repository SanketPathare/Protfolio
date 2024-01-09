import "./Project.css"
import ProjectBox from '../Project/ProjectBox';
import NewsletterImage from '../../images/NewsletterImage.png';
import RogfreeImage from '../../images/RogfreeImage.png';
import TindogImage from '../../images/TindogImage.png';
import TripFlyImage from '../../images/img1.png';


const Project = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={TripFlyImage} projectName="TripFly" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="Newsletter" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" />
        <ProjectBox projectPhoto={TindogImage} projectName="Tindog" />
      </div>

    </div>
  )
}

export default Project