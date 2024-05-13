import "./Project.css"
import ProjectBox from './ProjectBox';
import EcommerceImage from '../../images/e-commerce.png';
import RogfreeImage from '../../images/RogfreeImage.png';
import TindogImage from '../../images/TindogImage.png';
import TripFlyImage from '../../images/Tripfly.png';


const Project = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={TripFlyImage} projectName="TripFly" />
        <ProjectBox projectPhoto={EcommerceImage} projectName="ElectroMart" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" />
        <ProjectBox projectPhoto={TindogImage} projectName="Tindog" />
      </div>

    </div>
  )
}

export default Project