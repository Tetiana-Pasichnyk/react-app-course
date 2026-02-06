import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import cls from "./Header.module.css";
import Logo from "../../assets/logo.png";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={cls.header}>
      <p onClick={() => navigate("/")}>
        <img src={Logo} alt="Logo" width="40" height="40" />
        <span>ReactCard</span>
      </p>
      <div className={cls.headerButtons}>
        <Button onClick={() => navigate("/addquestion")}> Add </Button>
        <Button> Login </Button>
      </div>
    </header>
  );
};
