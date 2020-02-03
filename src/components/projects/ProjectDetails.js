import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const ProjectDetails = (props) => {
    const {project, auth} = props ;
    if(!auth.uid) return <Redirect to='/signIn' />
    
    if (project) {
        return (
        <div className="container section project-details">
           <div className="card z-depht-0">
               <div className="card-content">
                   <spam className="card-title">{project.title}</spam>
                   <p>{project.content} </p>
               </div>
               <div className="card-action grey lighten-4 grey-text">
                   <div>Posted by {project.authorFirsName} {project.authorLastName}</div>
                   <div>2nd September, 4am</div>
               </div>
           </div>
       </div>  
    )} else {
        return (
            <div clssName='conteiner center'>
                <p>Loading Project ... </p>
            </div>
    
        )
    }           

}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects 
    const project = projects ? projects[id] : null
    return{ 
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect( [
        { collection: 'projects'}
    ])
)(ProjectDetails)