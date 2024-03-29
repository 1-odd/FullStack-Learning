import { useEffect,useState } from "react";





function App2(){
    const [id,setId] = useState(1);

    function handleId(){
        setId(id+1);
    }
    return (
        <div>

            <button onClick={handleId}>Next</button>
            <Todo id={id} />

        </div>
    )
}

function Todo({id}){

    const [todo,setTodo] = useState({});

    useEffect(()=>{
        fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
        .then(async (res)=>{
            const json = await res.json();
            setTodo(json.todo);
        })
    },[id]);
    console.log(todo);

    return(
        <div>
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>
        </div>
    )
}

export default App2;