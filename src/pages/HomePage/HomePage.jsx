import { QuestionCard } from "../../components/QuestionCard";
import { API_URL } from "../../constans";
import { useEffect, useState } from "react";
import { QuestionCardList } from "../../components/QuestionCardList";
import { Loader } from "../../components/Loader";
import { delayFn } from "../../helpers/delayFn";

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getQuestions = async () => {
    try {
      setIsLoading(true);
      await delayFn();
      const response = await fetch(`${API_URL}/react`);
      const questions = await response.json();
      setQuestions(questions);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <QuestionCardList cards={questions} />
    </>
  );
};
