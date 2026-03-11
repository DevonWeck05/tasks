import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedOption, setSelectedOption] = useState<string>("");

    return (
        <div>
            <h3>Multiple Choice Question</h3>

            <Form.Group controlId="formMultipleChoice">
                <Form.Select
                    value={selectedOption}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        setSelectedOption(event.target.value);
                    }}
                >
                    {options.map((op: string) => (
                        <option value={op} key={op}>
                            {op}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {selectedOption === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
