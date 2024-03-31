import { useRecoilValue, RecoilRoot } from "recoil";
import "./App.css";
import { todoAtomFamily } from "./Atom";


/**
 * 
 * question :  how to get the value of a specific Todo  by passing todo id among the lots of todos item using atom family?
 *  and you can ask for multiple todos  at once goo!
 * 
 * 
 * 
 * atom-family is used when you want to create multple  atoms with similar structure but different values.
 * so here id is keep changing so we can say id is dynamic here means state variable .
 * 
 * 
 * so whenever we call the atomfamily with  that particular id 
 * it will return a single atom which has same structure as other atoms in family but have different initial value 
 * 
 * 
 */

function App() {
  return (
    <>
      <RecoilRoot>
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={1} />
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
