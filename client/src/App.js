
import './App.css';

//component import
import Header from './component/Header';
import TodoForm from './component/TodoForm'
import Todos from './component/Todos'


function App() {
  return (
    <div >
       <Header/>    
       <TodoForm />
       <Todos />
     </div>
  );
}

export default App;
