import {RENDER_CHAT_ROOMS} from './actionTypes';
export const getChatRooms = ()=>{
    // request blah blah
    return {
        type:RENDER_CHAT_ROOMS,
        payload:{
            rooms : [
                {
                    id:'fxczvne',
                    title:'Bronze',
                    people:10,
                    createdBy:'Daniel Yoo',
                },
                {
                    id:'asfddsaf',
                    title:'Silver',
                    people:22,
                    createdBy:'YongJe Kim'
                }
            ]
        }
    }
}