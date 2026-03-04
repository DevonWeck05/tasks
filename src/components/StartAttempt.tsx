import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    //return <div>Start Attempt</div>;
    const [attempts, setAttempts] = useState<number>(4);
    const [started, setStarted] = useState<boolean>(false);

    function changeToStart(): void {
        setAttempts(attempts - 1);
        setStarted(true);
    }

    function changeToStop(): void {
        setStarted(false);
    }

    function addAttempt(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            {started ?
                <div>
                    <Button disabled={true}>Start Quiz</Button>
                    <Button onClick={changeToStop}>Stop Quiz</Button>
                    <Button disabled={true}>Mulligan</Button>
                </div>
            : attempts <= 0 ?
                <div>
                    <Button disabled={true}>Start Quiz</Button>
                    <Button disabled={true}>Stop Quiz</Button>
                    <Button onClick={addAttempt}>Mulligan</Button>
                </div>
            :   <div>
                    <Button onClick={changeToStart}>Start Quiz</Button>
                    <Button disabled={true}>Stop Quiz</Button>
                    <Button onClick={addAttempt}>Mulligan</Button>
                </div>
            }

            <div>Number of Attempts: {attempts}</div>
        </div>
    );
}
