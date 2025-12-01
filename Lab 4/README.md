# JavaScript Quiz Game

## Overview
This project is a **simple JavaScript quiz game** that runs entirely in the **browser console**. It is designed to help users practice general knowledge questions while reinforcing core JavaScript concepts like **arrays, loops, functions, conditionals, and string methods**.

The quiz supports both **multiple-choice** and **text-based questions**, provides **immediate feedback**, tracks the user's **score**, and displays a **final message** based on performance.

---

## Features
- Multiple-choice and text-based questions.
- Input is normalized using `toLowerCase()` and `trim()` for accurate comparison.
- Real-time feedback with `alert()` for correct and incorrect answers.
- Score tracking throughout the quiz.
- Custom final message based on score.
- Option to restart the quiz after completion.

---

## Quiz Questions
The quiz currently includes 10 questions, mixing both multiple-choice (MCQ) and text-based formats:

- **MCQ example:**  
  `Which famous physicist developed the theory of relativity?`  
  Options: A) Richard Feynman, B) Albert Einstein, C) George Carlin, D) Maxwell  

- **Text example:**  
  `What is the powerhouse of the cell?`  

---

## How to Run
1. Open a modern browser (Chrome, Firefox, Edge, etc.).
2. Press `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac) to open the browser console.
3. Copy the entire `quiz.js` code and paste it into the console.
4. Press **Enter** to start the quiz.
5. Answer each question as prompted.
6. View immediate feedback and the final score at the end.
7. Optionally, restart the quiz when prompted.

---

## Code Structure
- **`ques` array:** Stores all quiz questions, type (MCQ or text), options (if applicable), and correct answers.
- **`runQuiz()` function:** Handles:
  - Prompting questions.
  - Normalizing user input.
  - Checking answers.
  - Updating score.
  - Displaying feedback and final message.
  - Offering a restart option.

---

## Learning Outcomes
By completing this project, you will:
1. Understand core JavaScript features: arrays, loops, conditionals, and functions.
2. Learn to handle user input and validate it effectively.
3. Practice creating interactive applications in the browser console.
4. Gain experience in organizing code for readability and reusability.
5. Develop logical thinking and problem-solving skills.

---

## Potential Improvements
- Add more questions for a richer quiz experience.
- Implement multiple-choice scoring hints.
- Introduce a timer for each question.
- Store high scores in the browser using `localStorage`.
- Add categories or difficulty levels for questions.

---

## Author
**Disha Saini**  
B.Tech CSE (AI & ML)
Section A  

