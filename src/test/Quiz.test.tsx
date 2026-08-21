import "@testing-library/jest-dom/vitest";

import { afterEach, describe, expect, it } from "vitest";

import { cleanup, render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import Quiz from "../pages/Quiz";

afterEach(() => {
    cleanup();
});

describe("Quiz Component", () => {
    it("renders the quiz title and first question", () => {
        render(<Quiz />);

        expect(
            screen.getByRole("heading", {
                name: /student career quiz/i,
            })
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                /what is the main purpose of a resume/i
            )
        ).toBeInTheDocument();
    });

    it("renders four answer options", () => {
        render(<Quiz />);

        const radioButtons = screen.getAllByRole("radio");

        expect(radioButtons).toHaveLength(4);
    });

    it("shows validation message when no option is selected", async () => {
        const user = userEvent.setup();

        render(<Quiz />);

        const nextButton = screen.getByRole("button", {
            name: /next question/i,
        });

        await user.click(nextButton);

        expect(screen.getByRole("status")).toHaveTextContent(
            /please select an option/i
        );
    });

    it("allows the user to select an answer", async () => {
        const user = userEvent.setup();

        render(<Quiz />);

        const radioButtons = screen.getAllByRole("radio");

        await user.click(radioButtons[0]);

        expect(radioButtons[0]).toBeChecked();
    });

    it("moves to the next question after selecting an answer", async () => {
        const user = userEvent.setup();

        render(<Quiz />);

        const radioButtons = screen.getAllByRole("radio");

        await user.click(radioButtons[0]);

        await user.click(
            screen.getByRole("button", {
                name: /next question/i,
            })
        );

        expect(
            screen.getByText(/question 2 of 10/i)
        ).toBeInTheDocument();
    });

    it("updates the question progress", async () => {
        const user = userEvent.setup();

        render(<Quiz />);

        expect(
            screen.getByText(/question 1 of 10/i)
        ).toBeInTheDocument();

        await user.click(
            screen.getAllByRole("radio")[0]
        );

        await user.click(
            screen.getByRole("button", {
                name: /next question/i,
            })
        );

        expect(
            screen.getByText(/question 2 of 10/i)
        ).toBeInTheDocument();
    });

    it("allows the user to complete all 10 questions", async () => {
        const user = userEvent.setup();

        render(<Quiz />);

        for (let i = 0; i < 10; i++) {
            const radioButtons = screen.getAllByRole("radio");

            expect(radioButtons.length).toBeGreaterThan(0);

            await user.click(radioButtons[0]);

            const buttonName =
                i === 9
                    ? /submit quiz/i
                    : /next question/i;

            await user.click(
                screen.getByRole("button", {
                    name: buttonName,
                })
            );
        }

        expect(
            screen.getByRole("heading", {
                name: /quiz completed/i,
            })
        ).toBeInTheDocument();
    });

    it("shows score and percentage after completing the quiz", async () => {
        const user = userEvent.setup();

        render(<Quiz />);

        for (let i = 0; i < 10; i++) {
            const radioButtons = screen.getAllByRole("radio");

            await user.click(radioButtons[0]);

            await user.click(
                screen.getByRole("button", {
                    name:
                        i === 9
                            ? /submit quiz/i
                            : /next question/i,
                })
            );
        }

        expect(
            screen.getByRole("heading", {
                name: /quiz completed/i,
            })
        ).toBeInTheDocument();

        expect(
            screen.getByText(/\d+\s*\/\s*10/)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/\d+%/)
        ).toBeInTheDocument();
    });

    it("shows review of all questions after submission", async () => {
        const user = userEvent.setup();

        render(<Quiz />);

        for (let i = 0; i < 10; i++) {
            const radioButtons = screen.getAllByRole("radio");

            await user.click(radioButtons[0]);

            await user.click(
                screen.getByRole("button", {
                    name:
                        i === 9
                            ? /submit quiz/i
                            : /next question/i,
                })
            );
        }

        expect(
            screen.getByRole("heading", {
                name: /review your answers/i,
            })
        ).toBeInTheDocument();

        // exact match is important because "Question 1"
        // also matches "Question 10" with a regex.
        expect(
            screen.getByText("Question 1", {
                exact: true,
            })
        ).toBeInTheDocument();

        expect(
            screen.getByText("Question 10", {
                exact: true,
            })
        ).toBeInTheDocument();
    });

    it("shows correct and incorrect answer status in review", async () => {
        const user = userEvent.setup();

        render(<Quiz />);

        for (let i = 0; i < 10; i++) {
            const radioButtons = screen.getAllByRole("radio");

            await user.click(radioButtons[0]);

            await user.click(
                screen.getByRole("button", {
                    name:
                        i === 9
                            ? /submit quiz/i
                            : /next question/i,
                })
            );
        }

        expect(
            screen.getByRole("heading", {
                name: /review your answers/i,
            })
        ).toBeInTheDocument();

        const reviewStatuses = screen.getAllByText(
            /correct|incorrect|wrong/i
        );

        expect(
            reviewStatuses.length
        ).toBeGreaterThan(0);
    });

    it("allows the user to retake the quiz", async () => {
        const user = userEvent.setup();

        render(<Quiz />);

        for (let i = 0; i < 10; i++) {
            const radioButtons = screen.getAllByRole("radio");

            await user.click(radioButtons[0]);

            await user.click(
                screen.getByRole("button", {
                    name:
                        i === 9
                            ? /submit quiz/i
                            : /next question/i,
                })
            );
        }

        expect(
            screen.getByRole("heading", {
                name: /quiz completed/i,
            })
        ).toBeInTheDocument();

        const retakeButton = screen.getByRole("button", {
            name: /retake quiz/i,
        });

        await user.click(retakeButton);

        expect(
            screen.getByText(/question 1 of 10/i)
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", {
                name: /student career quiz/i,
            })
        ).toBeInTheDocument();
    });
});