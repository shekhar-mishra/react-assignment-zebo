const initialState ={
    projectDetails:[
       
    ]
}

export default function imageReducer (state=initialState,action) {
    switch(action.type) {
    
        case 'Add-Image' :
             return {
                ...state,
                projectDetails:[...state.projectDetails, action.payload]
                
            }
            default:
                return state
    }
}