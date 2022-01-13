import {ADD , DELETE, DONE} from './action-type'


export const AddHandler = () => {
    return {
        type : ADD
        
    }
    
}


export const DeleteHandler = (id) => {
    return {
        type : DELETE ,
        payload: id
    }
    
}


export const DoneHandler = () => {
    return {
        type : DONE
    }
    
}