import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    type="text"
                    value={userAnswer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setUserAnswer(event.target.value);
                    }}
                />
            </Form.Group>
            {userAnswer === expectedAnswer ?
                <div>✔️</div>
            :   <div>❌</div>}
        </div>
    );
}
