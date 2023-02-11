import { useState } from "react";
import style from "./Counter.module.scss";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {count}
      <button className={style.btn1} onClick={increment}>
        increment
      </button>
    </div>
  );
}
