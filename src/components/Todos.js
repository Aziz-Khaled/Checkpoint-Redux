import React from 'react'
import {DeleteHandler} from '../redux/Action'
import {useDispatch } from 'react-redux'
function Todos({task}) {


    const Dispatch = useDispatch ()


    const Delete = () => {Dispatch (DeleteHandler)}
    return (
        <div>
        {task}
        <button onClick ={Delete}  >Delete</button>
        <button>Done</button>
        </div>
    )
}

export default Todos
