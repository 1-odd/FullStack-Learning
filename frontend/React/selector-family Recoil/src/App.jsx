import { useRecoilValue, RecoilRoot } from "recoil";
import "./App.css";
import { todoAtomFamily } from "./Selectors";




function App() {


  return (
    <>
   
      <RecoilRoot>
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={3} />
        <Todo id={3} />
        <Todo id={3} />
        <Todo id={3} />
        <Todo id={3} />
        <Todo id={3} />
        <Todo id={3} />
      </RecoilRoot>
    </>
  ); 
}

function Todo({ id }) {
  const currentTodo = useRecoilValue(todoAtomFamily(id)); // getting todo from atom family by passing id

  return (
    <>
      <p>id is : {id}</p>
      <h1>Title : {currentTodo.title}</h1>
      <h1>Description : {currentTodo.description}</h1>
      <h1>completed : {currentTodo.completed === true ? "yes":"nope" }</h1>
    </>
  );
}

export default App;
