import { useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodo] = useState([
    {
    title:"gym time",
    description:"go to the gym and lift some weights",
   
  },
  {
    title:"DSA time",
    description:"go and solve 3,4 question based on array",
   
  },
]);

function addTodo(){
  setTodo([...todos,{
    title:"new todo",
    description: "this is a new todo"
  }])
}

  return (
    <>
    <button onClick={addTodo} >Add Todo</button>
      {todos.map((todo)=>{
        return <Todo title={todo.title} description={todo.description}  />
      })}
    </>
  )
}

function Todo(props){
 

return <div>
  <h1>Title:{props.title}</h1>
  <h2>Description:{props.description}</h2>
</div>
  
}

export default App
