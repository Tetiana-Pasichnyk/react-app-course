import cls from "./HomePage.module.css";
import { QuestionCard } from "../../components/QuestionCard";

const card = [
  {
    id: "1",
    question: "What is React?",
    answer: "React is a library for building user interfaces.",
    description:
      "React is a JavaScript library developed by Facebook that is used to build UI with a component-based approach. React allows you to create user interfaces from individual pieces called components.",
    resources: ["https://react.dev", "https://react.dev/reference/react"],
    level: 1,
    completed: true,
    editDate: "03.02.2025, 19:49",
  },
  {
    id: "2",
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript for React.",
    description:
      "JSX allows you to write HTML-like code in JavaScript, which is then transpiled into calls to `React.createElement`. It simplifies creating and visually representing component structure.",
    resources: ["https://react.dev/learn/writing-markup-with-jsx"],
    level: 2,
    completed: false,
    editDate: "03.02.2025, 20:25",
  },
];

export const HomePage = () => {
  return (
    <>
      {card.map((card, index) => (
        <QuestionCard key={card.id} card={card} />
      ))}
    </>
  );
};
