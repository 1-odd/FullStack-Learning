import { useContext, useState } from 'react'
import { countContext } from './Context'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>

      {/* wrap the component inside context.provider by which you are sending your props
       and pass the value inside provider */}

      <countContext.Provider value={ {count ,setCount}} >
        <Count />
      </countContext.Provider>
      

    </div>
   
  )
}

function Count(){
  return (
    <div>
      <CountRender />
      <Button  />
    </div>
  )
}

function CountRender(){

  // now you can have access of props  using useContext hook
  const {count} = useContext(countContext);
  return <div>
    {count}
  </div>
}

function Button (){
  const {count,setCount} = useContext(countContext);
  

  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <button onClick={() => setCount(count => count - 1)}>Decrement</button>
    </div>
  )
}

export default App



{/**



to resolve this probleme with props-drilling we have context-API concept in which we keep the all state outside the component and
send those values directly where it needed 

*/}