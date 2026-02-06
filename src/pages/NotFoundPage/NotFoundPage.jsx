import cls from "./NotFoundPage.module.css";
import NotFound from "../../assets/not-found.png";

export const NotFoundPage = () => {
  return (
    <div>
      <img className={cls.notFoundImage} src={NotFound} alt="Not Found" />
    </div>
  );
};
