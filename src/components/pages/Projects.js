import React from 'react';
import '../Header.css';
import project1 from '../Assets/MoreThanAGame.png'
import project2 from '../Assets/SneakersPeak.png'
import project3 from '../Assets/misogi.png'
export default function Projects() {
    const projectsArray = [
        {
            title:"More Than A Game",
            desc:"This app allows you to search for local events around the college football game you are attending. ",
            img: project1,
            github:"https://github.com/mfrabott/More-Than-A-Game",
            deployed:"https://safe-lake-28734.herokuapp.com/"
        },
        {
            title:"SneakersPeak",
            desc:"This app is a place to view the latest sneakers and comment your thoughts on each one. It also has a page with links to other fashion websites similiar to this one.",
            img: project2,
            github:"https://github.com/menelik08/Group-1-pro-2",
            deployed:" https://safe-lake-28734.herokuapp.com/"
        },
        {
          title:"Misogi",
          desc:"This app is a website for a nonprofit organization that beings awareness to recycling ocean pollution plactics and turning them into clothing. This site is a fullstack MERN project.",
          img: project3,
          github:"https://github.com/LindsayK82/Misogi",
          deployed:"https://misogi.herokuapp.com/"
      },
    ] 
  return (
    
      <div>
      <h1 class="projects-header">Projects</h1>
      <div 
      class="projects-container"
      style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
     {projectsArray.map(project =>(
        <div class="card" style= {{width: "18rem", border:'solid', margin: '2%'}}>
        <img src={project.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.desc}</p>
          <div style={{margin: '2%'}}>
          <a href={project.github} className="btn btn-primary">Github Repo</a>
          </div>
          <a href={project.deployed} className="btn btn-primary">Deployed Link</a>
          
        </div>
      </div>
     ))}
     </div>
    </div>
  );
}