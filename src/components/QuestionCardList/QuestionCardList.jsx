import cls from "./QuestionCardList.module.css";
import { QuestionCard } from "../QuestionCard";
import { memo } from "react";

export const QuestionCardList = memo(({ cards }) => {
  return (
    <div className={cls.cardList}>
      {cards.map((card) => (
        <QuestionCard key={card.id} card={card} />
      ))}
    </div>
  );
});
