import { useMemo , useState } from 'react'



function App() {
  const [number , setNumber] = useState(0);
  const [count , setCount] = useState(0);


  function inputHandler(e){
    const input = Number(e.target.value);
    if(input !== number){
      setNumber(input);
    }
  }

  function handleCount(){
      setCount(count => count+1);
  }

  const sum = useMemo(()=>{
    return number + count;
  },[count,number]);
 
return (
  <div>
    <h5>counter  is : {count}</h5>
    <button onClick={handleCount}>counter++</button> <br /> <br />
    <input type="text" placeholder='Enter a number...' value={number} onChange={inputHandler} /> <br />

    
    
    <h2>sum is :{sum} </h2>
  
  </div>
)
}

export default App
