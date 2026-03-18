import React, { Children } from "react";
import cls from "./Badge.module.css";

export const Badge = ({ variant, children }) => {
  switch (variant) {
    case "primary":
      return <div className={`${cls.badge} ${cls.primary}`}>{children}</div>;
    case "secondary":
      return <div className={`${cls.badge} ${cls.secondary}`}>{children}</div>;
    case "success":
      return <div className={`${cls.badge} ${cls.success}`}>{children}</div>;
    case "danger":
      return <div className={`${cls.badge} ${cls.danger}`}>{children}</div>;
    default:
      return <div className={cls.badge}>{children}</div>;
  }
};
