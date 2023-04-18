// import todo from '../../../server/model/Todos'

import  {toggleTodo,updateTodo,deleteTodo} from '../redux/action/action';
import { useDispatch } from 'react-redux';

import { useState } from 'react';



 const Todoshow=({todo})=>{
   
    const [editing,setEditing]=useState(false);   
    const [text,setText]=useState(todo.data);

    const dispatch=useDispatch()

    const onFormSubmit=(e)=>{
      e.preventDefault();
      setEditing(prevState=>!prevState)

      dispatch(updateTodo(todo._id,text))
    }
    

    return (
       <li className="task"  

       onClick={()=>dispatch(toggleTodo(todo._id))} 
       style={{
         textDecoration:todo.done?'line-through':'',
         color:todo.done ?'red':'#34495e',
         backgroundColor:todo.done ?'green':'#34495e',
         textSixe:todo.done ?'20px':''
       }}
       
       >
        <span  style={{display :editing?'none':''}}>{todo.data}</span>
          <form style={{display :editing?'inline':'none'}} onSubmit={onFormSubmit}>
               <input 
               type="text" 
               value={text}
               onChange={(e)=>setText(e.target.value)}
               className='edit-todo'
               
               />

          </form>

{/* <span className='icon' ><i class="fas fa-check" /></span> */}

        <span className="icon" onClick={()=>dispatch(deleteTodo(todo._id))}>
        <i class="fas fa-trash"/>
        </span>
        <span className="icon" onClick={()=>setEditing(prevState=>!prevState)}>
        <i class="fas fa-pen"/>
        </span>
       </li>
    )
}

export default Todoshow;