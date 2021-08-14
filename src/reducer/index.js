const initialState ={
    projectDetails:[       
    ],
    clickedImage:{},
    shouldModalOpen:''
}

export default function imageReducer (state=initialState,action) {
    switch(action.type) {
    
        case 'Add-Image' :
             return {
                ...state,
                projectDetails:[...state.projectDetails, action.payload]
                
            }
            case 'Set-Clicked-Image' :
                return {
                    ...state,
                    clickedImage:action.payload,
                    shouldModalOpen:true
                }
                case 'Set-Modal-False' :
                    return {
                        ...state,
                       shouldModalOpen:action.payload
                    }

            default:
                return state
    }
}