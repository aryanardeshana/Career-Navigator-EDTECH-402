import { useState } from "react";

type Question = {
    question: string;
    options: string[];
    answer: string;
};

const questions: Question[] = [
    {
        question: "What is the main purpose of a resume?",
        options: [
            "To showcase your skills and experience",
            "To guarantee a job",
            "To replace a job interview",
            "To provide only personal information",
        ],
        answer: "To showcase your skills and experience",
    },
    {
        question: "What is important when preparing for a job interview?",
        options: [
            "Researching the company and role",
            "Ignoring the job description",
            "Arriving without preparation",
            "Avoiding questions from the interviewer",
        ],
        answer: "Researching the company and role",
    },
    {
        question: "What helps students identify areas they need to improve?",
        options: [
            "Skill gap analysis",
            "Ignoring feedback",
            "Avoiding new skills",
            "Skipping practice",
        ],
        answer: "Skill gap analysis",
    },
    {
        question: "What is a good approach when learning a new skill?",
        options: [
            "Practice consistently and apply what you learn",
            "Learn everything in one day",
            "Avoid practical projects",
            "Stop learning after the first mistake",
        ],
        answer: "Practice consistently and apply what you learn",
    },
    {
        question: "What should you consider when choosing a career path?",
        options: [
            "Your skills, interests, and career goals",
            "Only the highest salary",
            "Only what other people choose",
            "Avoiding opportunities to learn",
        ],
        answer: "Your skills, interests, and career goals",
    },
    {
        question: "Why is networking useful for students?",
        options: [
            "It can help discover career opportunities",
            "It guarantees employment",
            "It replaces skill development",
            "It removes the need for a resume",
        ],
        answer: "It can help discover career opportunities",
    },
    {
        question: "What is a useful way to improve interview skills?",
        options: [
            "Practice answering common interview questions",
            "Avoid speaking about your projects",
            "Memorize every possible answer",
            "Skip researching the company",
        ],
        answer: "Practice answering common interview questions",
    },
    {
        question: "Why should students build practical projects?",
        options: [
            "To demonstrate practical skills and experience",
            "To avoid learning theory",
            "To guarantee a job offer",
            "To replace all academic learning",
        ],
        answer: "To demonstrate practical skills and experience",
    },
    {
        question: "What should a student do after receiving useful feedback?",
        options: [
            "Use the feedback to identify and improve weak areas",
            "Ignore the feedback completely",
            "Stop working on the skill",
            "Avoid asking for feedback again",
        ],
        answer: "Use the feedback to identify and improve weak areas",
    },
    {
        question: "What is a good career development habit?",
        options: [
            "Continuously learning and improving relevant skills",
            "Stopping learning after getting a job",
            "Avoiding new technologies",
            "Only following what friends recommend",
        ],
        answer: "Continuously learning and improving relevant skills",
    },
];

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [answers, setAnswers] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState("");

    const question = questions[currentQuestion];

    const handleSubmit = () => {
        // Prevent empty option submission
        if (!selectedOption) {
            setMessage("Please select an option before continuing.");
            return;
        }

        setMessage("");

        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion] = selectedOption;

        setAnswers(updatedAnswers);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
            setSelectedOption("");
        } else {
            setSubmitted(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setSelectedOption("");
        setAnswers([]);
        setSubmitted(false);
        setMessage("");
    };

    const correctAnswers = answers.filter(
        (answer, index) => answer === questions[index].answer
    ).length;

    const wrongAnswers = questions.length - correctAnswers;

    const percentage = Math.round(
        (correctAnswers / questions.length) * 100
    );

    // Review ALL questions, not only wrong questions
    const reviewQuestions = questions.map((question, index) => ({
        ...question,
        userAnswer: answers[index],
        questionNumber: index + 1,
        isCorrect: answers[index] === question.answer,
    }));

    if (submitted) {
        return (
            <main className="min-h-screen bg-background px-4 py-10">
                <section
                    className="mx-auto w-full max-w-3xl"
                    aria-labelledby="quiz-result"
                >
                    {/* Result Card */}
                    <div className="glass-card rounded-2xl p-6 text-center md:p-8">
                        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                            <span className="text-3xl text-secondary">
                                ✓
                            </span>
                        </div>

                        <h1
                            id="quiz-result"
                            className="text-3xl font-bold text-primary"
                        >
                            Quiz Completed!
                        </h1>

                        <p className="mt-2 text-muted-foreground">
                            Here is your final quiz result.
                        </p>

                        {/* Result Stats */}
                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="rounded-xl border border-border bg-background/50 p-5">
                                <p className="text-sm text-muted-foreground">
                                    Correct Answers
                                </p>

                                <p className="mt-2 text-3xl font-bold text-secondary">
                                    {correctAnswers}
                                </p>
                            </div>

                            <div className="rounded-xl border border-border bg-background/50 p-5">
                                <p className="text-sm text-muted-foreground">
                                    Wrong Answers
                                </p>

                                <p className="mt-2 text-3xl font-bold text-destructive">
                                    {wrongAnswers}
                                </p>
                            </div>

                            <div className="rounded-xl border border-border bg-background/50 p-5">
                                <p className="text-sm text-muted-foreground">
                                    Score
                                </p>

                                <p className="mt-2 text-3xl font-bold text-primary">
                                    {correctAnswers} / {questions.length}
                                </p>
                            </div>
                        </div>

                        {/* Percentage */}
                        <div className="mt-6 rounded-xl bg-secondary/10 p-5">
                            <p className="text-sm text-muted-foreground">
                                Overall Percentage
                            </p>

                            <p className="mt-1 text-4xl font-bold text-secondary">
                                {percentage}%
                            </p>
                        </div>
                    </div>

                    {/* Review ALL Answers */}
                    <div className="glass-card mt-6 rounded-2xl p-6 md:p-8">
                        <h2 className="text-xl font-bold text-primary">
                            Review Your Answers
                        </h2>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Review all 10 questions, your answers, and the
                            correct answers.
                        </p>

                        <div className="mt-6 space-y-4">
                            {reviewQuestions.map((item) => (
                                <div
                                    key={item.questionNumber}
                                    className="rounded-xl border border-border bg-background/50 p-5"
                                >
                                    {/* Question + Status */}
                                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                        <p className="font-semibold text-primary">
                                            Question {item.questionNumber}
                                        </p>

                                        <span
                                            className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${item.isCorrect
                                                    ? "bg-secondary/10 text-secondary"
                                                    : "bg-destructive/10 text-destructive"
                                                }`}
                                        >
                                            {item.isCorrect
                                                ? "Correct"
                                                : "Wrong"}
                                        </span>
                                    </div>

                                    {/* Question */}
                                    <p className="mt-3 text-sm font-medium text-primary">
                                        {item.question}
                                    </p>

                                    {/* Answers */}
                                    <div className="mt-4 space-y-2 text-sm">
                                        <p
                                            className={
                                                item.isCorrect
                                                    ? "text-secondary"
                                                    : "text-destructive"
                                            }
                                        >
                                            <span className="font-semibold">
                                                Your answer:
                                            </span>{" "}
                                            {item.userAnswer}
                                        </p>

                                        <p className="text-secondary">
                                            <span className="font-semibold">
                                                Correct answer:
                                            </span>{" "}
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Retake */}
                    <div className="mt-6 text-center">
                        <button
                            type="button"
                            onClick={handleRestart}
                            className="btn-primary rounded-xl px-7 py-3 font-semibold text-white transition-all"
                        >
                            Retake Quiz
                        </button>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background px-4 py-10">
            <section
                className="glass-card mx-auto w-full max-w-2xl rounded-2xl p-6 md:p-8"
                aria-labelledby="quiz-title"
            >
                {/* Header */}
                <div className="mb-6">
                    <p className="text-sm font-medium text-secondary">
                        Question {currentQuestion + 1} of{" "}
                        {questions.length}
                    </p>

                    <h1
                        id="quiz-title"
                        className="mt-2 text-2xl font-bold text-primary md:text-3xl"
                    >
                        Student Career Quiz
                    </h1>

                    <p className="mt-2 text-sm text-muted-foreground">
                        Test your career knowledge and improve your skills.
                    </p>
                </div>

                {/* Progress */}
                <div
                    className="mb-7 h-2 w-full overflow-hidden rounded-full bg-muted"
                    aria-hidden="true"
                >
                    <div
                        className="h-full rounded-full bg-secondary transition-all duration-300"
                        style={{
                            width: `${((currentQuestion + 1) /
                                    questions.length) *
                                100
                                }%`,
                        }}
                    />
                </div>

                {/* Question */}
                <fieldset>
                    <legend className="mb-5 text-lg font-semibold text-primary">
                        {question.question}
                    </legend>

                    <div className="space-y-3">
                        {question.options.map((option) => {
                            const isSelected =
                                selectedOption === option;

                            return (
                                <label
                                    key={option}
                                    className={`flex cursor-pointer items-center rounded-xl border p-4 transition-all duration-200 ${isSelected
                                            ? "border-secondary bg-secondary/10 shadow-sm"
                                            : "border-border bg-background/50 hover:border-secondary/50 hover:bg-secondary/5"
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name={`question-${currentQuestion}`}
                                        value={option}
                                        checked={isSelected}
                                        onChange={(e) => {
                                            setSelectedOption(
                                                e.target.value
                                            );
                                            setMessage("");
                                        }}
                                        className="h-4 w-4 accent-secondary focus:ring-secondary"
                                    />

                                    <span
                                        className={`ml-3 text-sm md:text-base ${isSelected
                                                ? "font-medium text-primary"
                                                : "text-muted-foreground"
                                            }`}
                                    >
                                        {option}
                                    </span>
                                </label>
                            );
                        })}
                    </div>
                </fieldset>

                {/* Accessible live region */}
                <div
                    role="status"
                    aria-live="polite"
                    className="mt-4 min-h-6 text-sm font-medium text-destructive"
                >
                    {message}
                </div>

                {/* Next / Submit */}
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn-primary mt-4 w-full rounded-xl px-5 py-3 font-semibold text-white transition-all"
                >
                    {currentQuestion === questions.length - 1
                        ? "Submit Quiz"
                        : "Next Question"}
                </button>
            </section>
        </main>
    );
}