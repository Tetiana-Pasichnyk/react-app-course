import cls from "./HomePage.module.css";
import { QuestionCard } from "../../components/QuestionCard";

export const HomePage = () => {
  return (
    <div className={cls.homePage}>
      <QuestionCard />
    </div>
  );
};
