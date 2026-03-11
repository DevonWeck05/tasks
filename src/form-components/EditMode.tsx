import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>

            <Form.Group controlId="formEditableName">
                <Form.Check
                    type="switch"
                    id="is-editable-check"
                    label="Editable?"
                    checked={isEditMode}
                    onChange={() => {
                        setIsEditMode(!isEditMode);
                    }}
                />
                {isEditMode ?
                    <div>
                        <Form.Check
                            type="switch"
                            id="is-student-check"
                            label="Is Student?"
                            checked={isStudent}
                            onChange={() => {
                                setIsStudent(!isStudent);
                            }}
                        />
                        <Form.Control
                            type="text"
                            placeholder="Enter Name: "
                            value={userName}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setUserName(event.target.value);
                            }}
                        />
                    </div>
                :   null}
            </Form.Group>

            <div>
                {userName} is {isStudent ? "a student" : "not a student"}
            </div>
        </div>
    );
}
