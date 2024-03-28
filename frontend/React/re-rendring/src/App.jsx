import { useState } from 'react'

import './App.css'

function App() {

  // two ways of decreacing re-rendring 
  // 1 : using push down the state 
  // 2 : using useMemo it will not allow to re-render the component if state of that component is unchanged


  const[title , setTitle] = useState("React Js");

function handler(){
  const name = Math.random();
  setTitle( "updated title is  : " + name)
}


  return (

    // we have a problem in this code whenever we change the title all dynamic and static  part are getting rerendered which is not be re-rendred
    <>
    <h1>Problem re-rendring all component when only dynamic component changed </h1>
    <button onClick={handler}>random title</button>

    <Header title={title}></Header>
    <Header title="Ritik"></Header>
    <Header title="Kumar"></Header>
    <Header title="Vijay"></Header>
    

    </>
  )
}

function Header({title}){
    return <div>
      {title}
    </div>
}

export default App
