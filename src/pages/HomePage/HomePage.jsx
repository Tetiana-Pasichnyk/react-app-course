import cls from "./HomePage.module.css";
import { QuestionCard } from "../../components/QuestionCard";
import { API_URL } from "../../constans";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);
  const getQuestions = async () => {
    try {
      const response = await fetch(`${API_URL}/react`);
      const questions = await response.json();
      setQuestions(questions);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      {questions.map((card, index) => (
        <QuestionCard key={card.id} card={card} />
      ))}
    </>
  );
};
