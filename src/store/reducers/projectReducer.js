const initState = {
    projects: [
        {id: '1', title: 'build the pet', content: "bla, bla, bla"},
        {id: '2', title: 'paint the pet', content: "bla, bla, bla"},
        {id: '3', title: 'info the pet', content: "bla, bla, bla"},
    ]
}

const projectReducer = (state = initState,action) => {
    
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project',action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log( 'create project has an error', action.err);
            return state;
        default:
            return state;
    }
} 

export default projectReducer