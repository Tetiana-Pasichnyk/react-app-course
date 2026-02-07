import cls from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={cls.backHinter}>
      <span className={cls.loader}></span>
    </div>
  );
};
