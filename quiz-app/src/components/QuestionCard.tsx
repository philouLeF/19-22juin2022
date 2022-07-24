import React, { FC, useState } from 'react';

type Props = {
    question: string,
    answers: string[],
    callback: any,
    userAnswer: any,
    questionNr: number,
    totalQuestions: number,
}

const QuestionCard: FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions }) => (

    <div>
        <p className="number">
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map(answer => (
                <div>
                    <button
                        disabled={userAnswer}
                        onClick={callback}
                    >
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </div>
            ))}
        </div>
    </div>
)

export default QuestionCard;