import { Button } from "../Button";
import cls from "./Header.module.css";
import Logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <header className={cls.header}>
      <p>
        <img src={Logo} alt="Logo" width="40" height="40" />
        <span>ReactCard</span>
      </p>
      <div className={cls.headerButtons}>
        <Button isDisabled> Add </Button>
        <Button> Login </Button>
      </div>
    </header>
  );
};
