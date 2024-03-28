// push down the state 
import { useState } from "react";

function Solution1(){
    return (
        <div>
            <h1>Solution 1 push down the state now only dynamic component re-render</h1>
        <UpdatedHeader></UpdatedHeader>
        <Header title="static header"></Header>

        </div>
    )
}

function UpdatedHeader(){

    const[title , setTitle] = useState("initial daynamic  title");
    function handler(){
        setTitle("updated title is : "+Math.random());
    }
    return (
        <>
        <button onClick={handler}>update title</button>
        <Header title = {title}></Header>

        </>
    )
}

function Header({title}){
    return <div>
        {title}
    </div>
}

export default Solution1