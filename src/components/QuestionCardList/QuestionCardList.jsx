import cls from "./QuestionCardList.module.css";
import { QuestionCard } from "../QuestionCard";

export const QuestionCardList = ({ cards }) => {
  return (
    <div className={cls.cardList}>
      {cards.map((card) => (
        <QuestionCard key={card.id} card={card} />
      ))}
    </div>
  );
};
