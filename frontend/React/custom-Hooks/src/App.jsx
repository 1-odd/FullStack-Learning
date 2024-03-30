import { useEffect, useState } from "react";


// creating own hook for fetch the todos from the server

function useTodos(){
  const [todo, setTodos] = useState([]);

  useEffect(() => {
    axios.get("Backend link").then((res) => {
      setTodos(res.data.todos);
    });
  }, [todo]);
}

function App() {
  // normally used

  // const [todo, setTodos] = useState([]);

  // useEffect(() => {
  //   axios.get("Backend link").then((res) => {
  //     setTodos(res.data.todos);
  //   });
  // }, [todo]);




  const todo = useTodos();   // call the custom hook create by own


  return <div>{todo}</div>;
}

export default App;
