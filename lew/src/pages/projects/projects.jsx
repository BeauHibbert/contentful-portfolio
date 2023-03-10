import { useState, useEffect } from 'react';
import { contentfulDeliveryClient } from '../../contentfulClients';
import './projects.scss';

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
            return <div key={index}><h1>{project.fields.projectTitle}</h1></div>
          })
        }
      </div>
    </div>
  )
}

export default ProjectPage;