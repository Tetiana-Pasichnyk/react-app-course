import React, { useId } from "react";
import cls from "./SearchImput.module.css";
import { SearchIcon } from "../icons";

export const SearchImput = ({ value, onChange }) => {
  const inputId = useId();
  return (
    <div className={cls.inputContainer}>
      <label htmlFor={inputId}>
        <SearchIcon />
      </label>
      <input type="text" id={inputId} value={value} className={cls.input} placeholder="Search questions..." onChange={onChange} />
    </div>
  );
};
