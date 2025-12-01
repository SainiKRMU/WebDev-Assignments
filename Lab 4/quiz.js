//Disha Saini
//B. Tech CSE(AI&Ml)
//Section:A
//Lab 4


// Quiz questions array
const ques = [
    {
        type: "mcq",
        question: "1. Which famous physicist developed the theory of relativity?",
        options: ["A) Richard Feymann", "B) Albert Einstein", "C) George Carlin", "D) Maxwell"],
        answer: "b"
    },
    {
        type: "text",
        question: "2. What is the powerhouse of the cell?",
        answer: "mitochondria"
    },
    {
        type: "mcq",
        question: "3.What is the most abundant gas in the Earth's atmosphere?",
        options: ["A) Oxygen", "B) Nitrogen", "C) Carbon Dioxide", "D) Hydrogen"],
        answer: "b"
    },
    {
        type: "text",
        question: "4. Which scientist is known for his three laws of motion?",
        answer: "isaac newton"
    },
    {
        type: "mcq",
        question: "5. What is the largest ocean?",
        options: ["A) Atlantic", "B) Pacific", "C) Indian", "D) Arctic"],
        answer: "b"
    },
    {
        type: "text",
        question: "6. What is the largest organ in the human body?",
        answer: "skin"
    },
    {
        type: "mcq",
        question: "7. Which animal is known for having black-and-white stripes?",
        options: ["A) Tiger", "B) Zebra", "C) Panda", "D) Skunk"],
        answer: "b"
    },
    {
        type: "text",
        question: "8. What gas do plants absorb from the atmosphere?",
        answer: "carbon dioxide"
    },
    {
        type: "mcq",
        question: "9. Which continent is the largest?",
        options: ["A) Africa", "B) Europe", "C) Asia", "D) North America"],
        answer: "c"
    },
    {
        type: "text",
        question: "10. What do bees make?",
        answer: "honey"
    }
];

// Function to run the quiz
function runQuiz() {
    let score = 0;

    for (let i = 0; i < ques.length; i++) {
        const q = ques[i];
        let userAnswer;

        // Build question text depending on type
        if (q.type === "mcq") {
            let questionText = `${q.question}\n\n${q.options.join("\n")}\n\nEnter A, B, C, or D:`;
            userAnswer = prompt(questionText);
        } else {
            userAnswer = prompt(q.question);
        }

        if (userAnswer === null) {
            alert("Quiz canceled.");
            return;
        }

        userAnswer = userAnswer.toLowerCase().trim();

        // Check answer
        if (userAnswer === q.answer) {
            score++;
            alert("Correct! 🎉");
        } else {
            alert(`Incorrect. The correct answer is: ${q.answer.toUpperCase()}`);
        }
    }

    // Score messages
    let message = "";
    if (score === ques.length) {
        message = "Perfect score! Amazing job!";
    } else if (score >= 7) {
        message = "Great work! You did very well!";
    } else if (score >= 4) {
        message = "Not bad! Keep practicing.";
    } else {
        message = "Don't give up! Practice makes perfect!";
    }

    alert(`Quiz Over! You scored ${score} out of ${ques.length}.\n\n${message}`);

    // Restart option
    const restart = prompt("Would you like to play again? (yes/no)").toLowerCase().trim();

    if (restart === "yes" || restart === "y") {
        runQuiz();
    } else {
        alert("Thanks for playing!");
    }
}

// Start quiz automatically
runQuiz();
