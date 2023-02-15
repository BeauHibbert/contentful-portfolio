import { useState, useEffect } from 'react';
import { contentfulDeliveryClient } from '../../contentfulClients';
import './projects.scss';
import { Link } from 'react-router-dom';

const ProjectPage = () => {

  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    const getAllProjects = async () => {
      await contentfulDeliveryClient.getEntries({content_type: 'project'})
      .then(response => {
        console.log(response.items)
        setAllProjects(response.items)
      })
      .catch(error => console.log('Error getting all projects: ', error));
    };

    getAllProjects();
  }, []); // empty dependency array since this should only run once (on page load/when component mounts)

  return (
    <div className="portfolio-page-wrapper page-wrapper">
      <h1 className="page-title">All Projects</h1>
      <div className="projects-wrapper flex justify-around">
        {
          allProjects.map((project, index) => {
            return (
              <Link to={'/projects/' + project.fields.slug} key={index}>
              <div className='project'>
                <h1>{project.fields.projectTitle}</h1>
                <img src={project.fields.pictureOfProject[0].fields.file.url} alt='project cover image'/>
                <p>{project.fields.projectDescription.content[0].content[0].value}</p>
              </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProjectPage;