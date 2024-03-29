import { useState, memo, useCallback } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // problem with  this function is that it will be recreated every time the component App renders

  // function a() {
  //   console.log("refrence function");
  // }

  // solution wrap the above function  in usecallback to prevent its recreation on each render of parent component  const b = () =>{  const b=useCallback(()=>{  const b = () =>{  const b=useCallback(()=>{  // to solve above issue we can use use  // to solve above issue we can use use


  const a = useCallback(()=>{
    console.log('refrence function');
  },[]);  // dependency array can have setCount or can be empty but if you put count it will change whenever you click on button and it created again and rerender again
  

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

      <Demo a={a} />
    </>
  );
}

const Demo = memo(function ({ a }) {
  console.log("re-render");
  return <div>hii there</div>;
});

export default App;
