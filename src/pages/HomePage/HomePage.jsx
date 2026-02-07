import { QuestionCard } from "../../components/QuestionCard";
import { API_URL } from "../../constans";
import { useEffect, useState } from "react";
import { QuestionCardList } from "../../components/QuestionCardList";

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
      <QuestionCardList cards={questions} />
    </>
  );
};
