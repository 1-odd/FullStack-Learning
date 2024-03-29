import { useEffect, useState } from "react";
import "./App.css";

function App() {

	const [todos, setTodos] = useState([]);

  


  useEffect(()=>{

    setInterval(()=>{

      fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res)=>{
        const data = await res.json();
        setTodos(data.todos);
      })
      
    },10000);
    
  },[]);

	

	return(
		<div>
			{todos.map(({title, description,id}) =>
			 <Todo key = {id} title={title} description={description} />
			 )}

		</div>

		
	)


}

function Todo({title, description}){
	return (
		<div>

			<h1>{title}</h1>
			<h2>{description}</h2>

			
		</div>
	)
}

export default App;
