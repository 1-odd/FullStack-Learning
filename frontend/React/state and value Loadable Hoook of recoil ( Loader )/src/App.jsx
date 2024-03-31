import { useRecoilValue, RecoilRoot, useRecoilStateLoadable } from "recoil";
import "./App.css";
import { todoAtomFamily } from "./Selectors";

function App() {
  return (
    <>
      <RecoilRoot>
        <Todo id={1} />
        <Todo id={2} />
      </RecoilRoot>
    </>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useRecoilStateLoadable(todoAtomFamily(id)); // getting todo from atom family by passing id

  if (todo.state === "loading") {
    return (
      <div>
        <div style={loaderContainerStyle}>
          Loading..
          <div style={loaderStyle}></div>
        </div>
      </div>
    );
  } else if (todo.state === "hasValue") {
    return (
      <>
        <p>id is : {id}</p>
        <h1>Title : {todo.contents.title}</h1>
        <h1>Description : {todo.contents.description}</h1>
        <h1>completed : {todo.contents.completed === true ? "yes" : "nope"}</h1>
      </>
    );
  }
  else if(todo.state === "hasError"){
    return <div>
      something went wrong ..
    </div>
  }
}

const loaderContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const loaderStyle = {
  border: "8px solid #f3f3f3" /* Light grey */,
  borderTop: "8px solid #3498db" /* Blue */,
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  animation: "spin 1s linear infinite",
};

export default App;
