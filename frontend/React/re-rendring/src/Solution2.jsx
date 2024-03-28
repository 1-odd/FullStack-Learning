import { useState, memo } from "react";


const staticTitle = "Static Title";
function Solution2() {
   
    const [title, setTitle] = useState("Dynamic title");

    function handler() {
        const random = Math.random();
        setTitle("Random title is " + random);
    }

    return (
        <>
            <h1>Solution 2 using useMemo hook now only dynamic component re-render</h1>
            <button onClick={handler}>update dynamic title</button>
            <Header title={title} />
            <Header title={staticTitle} />
            <Header title={staticTitle} />
            <Header title={staticTitle} />
            <Header title={staticTitle} />
            <Header title={staticTitle} />
            <Header title={staticTitle} />
            <Header title={staticTitle} />
            <Header title={staticTitle} />
            <Header title={staticTitle} />
            <Header title={staticTitle} />
        </>
    );
}

const Header = memo(function Header({ title }) {
    return <div>{title}</div>;
});

export default Solution2;
