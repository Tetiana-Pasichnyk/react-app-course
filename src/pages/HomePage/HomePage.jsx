import { API_URL } from "../../constans";
import { useEffect, useState } from "react";
import { QuestionCardList } from "../../components/QuestionCardList";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";
import cls from "./HomePage.module.css";
import { SearchImput } from "../../components/SearchImput";

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
      <div className={cls.controlContainer}>
        <SearchImput value={searchValue} onChange={searchValueHndler} />
      </div>
      {isLoading && <Loader />}
      {error && <div>{error}</div>}
      <QuestionCardList cards={questions} />
    </>
  );
};
