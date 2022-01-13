import './App.css';
import TodoList from './components/TodoList'
import Add from './components/Add'
import {useState} from 'react'



function App() {


  const [todos, setTodos] = useState([
    { text: "save the galaxy", id: 1, isDone: false },
    { text: "walk the cat ", id: 2, isDone: false },
    { text: "attend the workshop ", id: 3, isDone: false },
  ]);

  return (
    <div className="App">

<h1> Todo app</h1>
<Add />
<TodoList todos ={todos} />

    </div>
  );
}

export default App;
