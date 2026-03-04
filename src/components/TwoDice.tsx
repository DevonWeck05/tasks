import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    //return <div>Two Dice</div>;

    const [die1, setD1] = useState<number>(4);
    const [die2, setD2] = useState<number>(5);
    const [win, setWin] = useState<number>(0);

    function checkWin(die1: number, die2: number): void {
        if (die1 === 1 && die2 === 1) {
            setWin(2);
        } else if (die1 === die2) {
            setWin(1);
        } else {
            setWin(0);
        }
    }

    function changeD1(): void {
        const newValue = d6();
        setD1(newValue);
        checkWin(newValue, die2);
    }

    function changeD2(): void {
        const newValue = d6();
        setD2(newValue);
        checkWin(newValue, die1);
    }

    return (
        <div>
            <Button onClick={changeD1}>Roll Left</Button>
            <Button onClick={changeD2}>Roll Right</Button>
            <span data-testid="left-die">{die1}</span>
            <span data-testid="right-die">{die2}</span>
            {win === 1 ?
                <div>Win</div>
            : win === 2 ?
                <div>Lose</div>
            :   null}
        </div>
    );
}
