

import './App.css'
// main component
function App() {
  
  return (
    <div>
      <CardWrapper innerComponent = {<TextComponent/>} />
     
    </div>
  )


}
// this is wrapper component that take  another component as props and render it inside the card
function CardWrapper({innerComponent}){

  return (
  <div style={{
    border: "1px solid black",
    padding: 10,
    margin: 10
  }} >
    {innerComponent}
  </div>
  )

}



// text component which is pass as  a prop to CardWrapper Component by main  component
function TextComponent(){
  return <div  >
    This is text component
  </div>
}






export default App
