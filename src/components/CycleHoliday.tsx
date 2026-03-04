import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "❤️" | "💀" | "🎅🏻" | "🧼" | "🏖";

const YEAR_TRANSITIONS: Record<Holiday, Holiday> = {
    "🧼": "❤️",
    "❤️": "🏖",
    "🏖": "💀",
    "💀": "🎅🏻",
    "🎅🏻": "🧼",
};

const ALPHABETICAL_TRANSITIONS: Record<Holiday, Holiday> = {
    "🎅🏻": "🏖",
    "🏖": "💀",
    "💀": "❤️",
    "❤️": "🧼",
    "🧼": "🎅🏻",
};

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("🧼");

    function changeByYear(): void {
        const newHoliday = YEAR_TRANSITIONS[currentHoliday];
        setCurrentHoliday(newHoliday);
    }

    function changeByAlphabetical(): void {
        const newHoliday = ALPHABETICAL_TRANSITIONS[currentHoliday];
        setCurrentHoliday(newHoliday);
    }
    return (
        <div>
            <span>Holiday: {currentHoliday}</span>
            <Button onClick={changeByYear}>Advance Holiday (Year)</Button>
            <Button onClick={changeByAlphabetical}>
                Advance Holiday (Alphabetical)
            </Button>
        </div>
    );
}
