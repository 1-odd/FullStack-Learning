import {
  
  useRecoilValue,
  RecoilRoot,
  useSetRecoilState,
} from "recoil";
import "./App.css";
import { countAtom ,evenSelector } from "./Store/atoms/Count";

function App() {
  return (
    <div>
      {/* wrap the component inside RecoilRoot on which you want to use state */}

      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("re-render");
  return (
    <div>
      <CountRender />
      <Button />
    </div>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom);
  // now you can have access of props  using useContext hook

  return <div>
    {count}
    <br />
    <Even/>
    </div>;
}

function Even(){

  const isEven = useRecoilValue(evenSelector) ;
  return <>{isEven ? "Even" : null}</>
}


function Button() {
 console.log("button render")
  const setCount = useSetRecoilState(countAtom);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
