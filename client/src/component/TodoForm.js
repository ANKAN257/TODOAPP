import { useState } from "react";

import { addNewTodo } from "../redux/action/action";
import {useDispatch} from 'react-redux';


const TodoForm=()=>{
const [text,setText]=useState("")

const dispatch=useDispatch();

    const onFormSubmit=(e)=>{
         e.preventDefault();
         dispatch(addNewTodo(text));

         setText('')
    }
    const onInputChange=(e)=>{
         console.log(e.target.value);
         setText(e.target.value)
    }
    return(
        <form  className="form" onSubmit={onFormSubmit}>
           <input className="input" placeholder="Enter new Todo....."
            onChange={onInputChange}
            value={text}
           />

        </form>
    )
}

export default TodoForm