export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        
        const firestore = getFirestore();
        firestore.collection('projects').add({ 
            ...project,
            authorFirstName: 'hard coded first name',
            authorLastName: 'hard coded last name',
            authorID: 'hard coded id 321',
            createdAt: new Date() 
        }).then( () => {
            dispatch({ type: 'CREATE_PROJECT', project});
        }).catch((err) =>{
            dispatch({ type: 'CREATE_PROJECT_ERROR', err})
        })
        
    }
};
