import  express  from "express";
import { addTodo ,getAllTodos,toggleTodoDone,updateTodo,deleteTodo} from '../controller/todo.js'
// import { deleteTodo } from "../../client/src/redux/action/action.js";
// import { getAllTodos } from "../../client/src/redux/action/action.js";

const route=express.Router();


route.post('/todos',addTodo)
route.get('/todos',getAllTodos)
route.get('/todos/:id',toggleTodoDone)
route.put('/todos/:id',updateTodo);
route.delete('/todos/:id',deleteTodo);
export default route;