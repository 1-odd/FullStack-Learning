import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <Count count={count} setCount={setCount} />
      

    </div>
   
  )
}

function Count({count ,  setCount}){
  return (
    <div>
      {count}
      <Button count={count} setCount={setCount} />
    </div>
  )
}

function Button ({count , setCount}){
  return (
    <div>
      <button onClick={()=>{
          setCount(count => count +1)
      }} >Increment</button>
      <button onClick={()=>{
          setCount(count => count - 1)
      }} >Decrement</button>
    </div>
  )
}

export default App



{/**

Here in props drilling we have some problem we have to pass the props to those components where it might be not 
needed just like above counter app .
it will be problematc in large scale application it become complicated to understand and hard to debug.

to resolve this probleme we have context-API concept in which we keep the all state outside the component and
send those values directly where it needed 

*/}