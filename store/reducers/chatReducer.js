import { RENDER_CHAT_ROOMS } from '../actions/actionTypes';
const initialState = {
    rooms:[
        
    ]
}

const chatReducer = (state=initialState, action)=>{
    switch(action.type){
        case RENDER_CHAT_ROOMS:
            return {
                rooms:action.payload.rooms,
            }
        default:
            return state;
    }
}
export default chatReducer;