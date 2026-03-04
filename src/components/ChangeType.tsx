import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

const QUESTION_TRANSITIONS: Record<QuestionType, QuestionType> = {
    multiple_choice_question: "short_answer_question",
    short_answer_question: "multiple_choice_question",
};

export function ChangeType(): React.JSX.Element {
    const [currentQuestion, setCurrentQuestion] = useState<QuestionType>(
        "short_answer_question",
    );

    function changeCurrentQuestion(): void {
        const newQuestion = QUESTION_TRANSITIONS[currentQuestion];
        setCurrentQuestion(newQuestion);
    }

    return (
        <div>
            <div>
                <Button onClick={changeCurrentQuestion}>Change Type</Button>
            </div>
            <div>
                {currentQuestion === "multiple_choice_question" ?
                    "Multiple Choice"
                :   "Short Answer"}
            </div>
        </div>
    );
}
