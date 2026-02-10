import React from "react";
import "./App.css";
import forest from "./assests/forest.jpg";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript
                </header>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload.
                </p>
                <p>Devon Weckherlen</p>
                <p>Hello World</p>
            </div>
            <div className="App">
                <h1>Relaxing Forset View</h1>
                <img
                    className="App-img"
                    src={forest}
                    alt="Picture of the forest"
                />
                <p className="App-list">Reasons why the forset is nice:</p>
                <ul className="App-list">
                    <li>Evoke feelings of peace and serenity</li>
                    <li>You can listen to the birds</li>
                    <li>Very aesthetically pleasing to look at</li>
                </ul>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            <p></p>
            <div
                className="red-box"
                style={{ backgroundColor: "red", textAlign: "center" }}
            >
                some silly text messing up the feng shui of my website
            </div>
        </>
    );
}

export default App;
