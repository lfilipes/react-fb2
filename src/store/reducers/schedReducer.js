const initState = {
    days_agenda: [
        {id: 1, 
         day: '2020-01-01', 
         appointment :[
            {
                slot_id: 1,
                title:"appointment 01",
                description: " appointmnt 1 description",
                email: "user1email@google.com",
                name:"user1"
            },
            {
                slot_id: 4,
                title:"appointment 04",
                description: " appointmnt 4 description",
                email: "user4email@google.com",
                name:"user4"
            }],
        },
        {id: 2, 
         day: '2020-01-02', 
         appointment :[
            {
                slot_id: 6,
                title:"appointment 06",
                description: " appointmnt 6 description",
                email: "user6email@google.com",
                name:"user6"
            }],
        }   
    ], 
    step:1
}

const schedReducer = (state = initState,action) => {
    
    switch (action.type) {
        case 'CREATE_APPOINTMENT':
            console.log('appointment created',action.appointment);
            return state;
        case 'CREATE_APPOINTMENT_ERROR':
            console.log( 'create appointment has an error', action.err);
            return state;
        default:
            return state;
    }
} 

export default schedReducer