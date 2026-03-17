import { API_URL } from "../../constans";
import { useEffect, useState } from "react";
import { QuestionCardList } from "../../components/QuestionCardList";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const questions = await response.json();

    setQuestions(questions);
    return questions;
  });

  useEffect(() => {
    getQuestions("react");
  }, []);
  const searchValueHndler = (e) => {
    setSearchValue(e.target.value);
  }; 

  return (
    <>
      <input type="text" placeholder="Search questions..." value={searchValue} onChange={searchValueHndler} />

      {isLoading && <Loader />}
      {error && <div>{error}</div>}
      <QuestionCardList cards={questions} />
    </>
  );
};
