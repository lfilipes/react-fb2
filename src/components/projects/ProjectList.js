import React from 'react'
import PojectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
    return (
        <div className="project-list selection">
            { projects && projects.map(project => {
                return(
                    <Link to={ '/project/' + project.id}>
                        <PojectSummary project={project} key={project.id}/>
                    </Link>
                )
            })}
        </div>
    )
}
export default ProjectList