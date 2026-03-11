import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [allColors] = useState<string[]>([
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "white",
        "black",
    ]);
    const [color, setColor] = useState<string>("red");

    return (
        <div>
            <h3>Change Color</h3>
            <div
                style={{
                    display: "flex",
                    gap: "30px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {allColors.map((c: string) => (
                    <Form.Check
                        key={c}
                        type="radio"
                        name="colors"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setColor(event.target.value);
                        }}
                        id={`color-check-` + c}
                        label={c.charAt(0).toUpperCase() + c.slice(1)}
                        value={c}
                        checked={color === c}
                        style={{
                            backgroundColor: c,
                            padding: "0px 8px",
                            borderRadius: "4px",
                        }}
                    />
                ))}
            </div>
            Your color is
            <span
                style={{
                    backgroundColor: color,
                    padding: "0px 8px",
                    borderRadius: "4px",
                }}
                data-testid="colored-box"
            >
                {color}
            </span>
        </div>
    );
}
