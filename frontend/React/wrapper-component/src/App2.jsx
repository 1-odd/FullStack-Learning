function App2(){

    return (
        <div>
            <Wrapper>
                <h2>calling wrapper component</h2>
            </Wrapper>
            <Wrapper>
                <h2>calling wrapper component 2</h2>
            </Wrapper>
            <Wrapper>
                <TextComponent/>
            </Wrapper>
        </div>
    )
}


function Wrapper  ({children}){

    return(
        <div style={{border:"1px solid black"}}>
            {children}
        </div>
    )
}

const TextComponent = ()=>{
    return (
        <div>
            this is text component pass as child
        </div>
    )
}

export default App2;