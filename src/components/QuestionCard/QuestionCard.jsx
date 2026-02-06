import { Button } from "../Button";
import cls from "./QuestionCard.module.css";

export const QuestionCard = () => {
  return (
    <div className={cls.card}>
      <div className={cls.cardLabel}>
        Card Label
        <div>Level 1</div>
        <div> Not Comlited</div>
      </div>
      <h5 className={cls.cardTitle}>What is React?</h5>
      <div className={cls.cardAnswer}></div>
      <label className={cls.cardAnswers}>Answer</label>
      <p className={cls.cardAnswer}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda vel vitae vero quam ut numquam, iusto eligendi.
      </p>
      <Button onClick={() => {}}> Button</Button>
    </div>
  );
};
