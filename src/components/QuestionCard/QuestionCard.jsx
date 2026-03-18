import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import cls from "./QuestionCard.module.css";
import { Badge } from "../Badge/Badge";

export const QuestionCard = ({ card }) => {
  const navigate = useNavigate();

  const levelVariant = card.level === 1 ? "primary" : card.level === 2 ? "secondary" : card.level === 3 ? "badge" : "danger";
  const completionVariant = card.completed ? "success" : "danger";
  return (
    <div className={cls.card}>
      <div className={cls.cardLabel}>
        <Badge variant={levelVariant}>Level {card.level}</Badge>
        <Badge variant={completionVariant}> {card.completed ? "Completed" : "Not Completed"}</Badge>
      </div>
      <h5 className={cls.cardTitle}>{card.question}</h5>
      <div className={cls.cardAnswer}></div>
      <label className={cls.cardAnswers}>Answer</label>
      <p className={cls.cardAnswer}>{card.answer}</p>
      <Button onClick={() => navigate(`/question/${card.id}`)}>View</Button>
    </div>
  );
};
