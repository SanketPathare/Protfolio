import "./Project.css"
import ProjectBox from './ProjectBox';
import CryptoApp from '../../images/CryptoApp.png';
import Gemini from '../../images/gemini.png';
import ElectroMart  from '../../images/electromart.png'
import Tripfly from '../../images/Tripfly.png'
import TalkWithAI from '../../images/TalkWithAI.png'
import imageGenerator from '../../images/image-generator.png'
import AutoNotes from '../../images/AutoNotes.png'
const Project = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={Gemini} projectName="Gemini"  />
        <ProjectBox projectPhoto={ Tripfly } projectName="Tripfly" />
        <ProjectBox projectPhoto={ CryptoApp} projectName="CryptoApp" />
        <ProjectBox projectPhoto={ ElectroMart} projectName="ElectroMart" />
        <ProjectBox projectPhoto={ TalkWithAI} projectName="TalkWithAI" />
        <ProjectBox projectPhoto={ imageGenerator} projectName="ImageGenerator" />
        <ProjectBox projectPhoto={ AutoNotes} projectName="AutoNotes" />
      </div>

    </div>
  )
}

export default Project