import {ADD, DELETE, DONE} from './action-type'

const initialState = {
        todos : [
            { text: "save the galaxy", id: 1, isDone: false },
            { text: "walk the cat ", id: 2, isDone: false },
            { text: "attend the workshop ", id: 3, isDone: false },
            ]
    
}


export const TodoHandler = (state =initialState , action) => {
    switch (action.type) {
        case DELETE:
        return {
                ...state , todos : state.todos.filter(el =>el.id !== action.payload     )
            }
            
    
        default:  
            return state ;
                
        
            
    }
}