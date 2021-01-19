import './App.css';
import ProjectContainer from './Containers/ProjectContainer.js'
import Arrow from './image/Arrow.png'

function App() {
  return (
    <div className='app'>
     <h1 className='title'>Hi I'm Jackson Beytebiere <br/> I'm a Software Engineer</h1>
     {/* <div className='ProjectsButtonDiv'>
        <a className='ProjectButton' href="#projects">
          <img className='Arrow' src={Arrow} alt='Arrow here'/>
          <h2>Projects</h2>
        </a>
     </div>
     <div className="demo">
     <img className='Arrow' src={Arrow} alt='Arrow here'/>
     <a href="#projects">
     Demo
     </a>
     </div> */}
     <br/>
     <br/>
     <a href="#projects" className='ProjectButtonDiv'> 
     <img className='Arrow' src={Arrow} alt='Arrow here'/>
     <h3>Projects</h3>
     </a>
     <div id='projects' className='ProjectContainerDiv'>
      <ProjectContainer/>
     </div>
     <a href="#about" className='contactButtonDiv'> 
     <img className='Arrow' src={Arrow} alt='Arrow here'/>
     <h3>About me/ Contact</h3>
     </a>
     <div id='about' className='infoDiv'>
     <div className='aboutDiv'>
      <h3>About me</h3>
      <p>My name is Jackson Beytebiere. Im a software engineer. I graduated from Flatiron coding bootcamp, an intensive 12 week course which involved learning full stack development with modern frameworks
  .      I have deep knowledge in engineering, physics and biology as I have a bachelors in science from University of Washington.
        Prior to software development I traveled diverse paths such as a biologist, chef, surveyor and horticulturalist.
        Those jobs taught me about the ins and out of  handling clients and working in a team.
        Though at the start of 2020 with the lockdown I had to reevaluate my life.
        I realized that my true passion was coding. I began with online tutorials and moved my way up to coding competitions
        which were exhilarating. I am excited to bring my enjoyment of coding together with my strengths of analytical thinking, perseverance and attention to detail to become the best software engineer I can be.
        </p>
      </div>
      <div className='contactDiv'>
        <h3>Contact Info</h3>
        <p>Email: jacksongrowson@gmail.com</p>
        <a href='https://www.linkedin.com/in/jackson-beytebiere-2049951b6/' className='linkedin'>Linkedin</a>
      </div>
     </div>
     <div id='dummy' className='dummy'></div>
    </div>
  );
}

export default App;
