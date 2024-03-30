import { useEffect, useRef, useState } from 'react'
import './App.css'


// useRef do 2 things update the number without re-rendering , access DOM element easily 

function App() {
  let incomeText = 5000;  // 1. assume it is wrong we will update the dom (this value) using useRef
  const devRef = useRef();
  useEffect(()=>{
    setTimeout(()=>{
      devRef.current.innerHTML = "correct income tex is : "+1000;   // 2. use ref to
    },5000)
      
  },[])


  // 2. count the number of rendring 
  const counter =  useRef(0);    // every time when state change the ref also change

  const [count, setCount] = useState(0);
  counter.current += 1;

  return (
    <>
     
     
        <button  ref={devRef}  onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1>number of rendring is : {counter.current}</h1>
        <h2 ref={devRef} >income tex is : {incomeText}</h2>

        
    </>
  )
}

export default App
