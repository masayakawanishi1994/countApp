import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  // count = 箱 setCount = 中身 useState = イベント
  const [count, setCount] = useState<number>(0);
  // コンポーネント内の情報を保持する（ステートを保持する）
  const prevCount = useRef<number>();

  const handleUp = (): void => {
    setCount(count + 1);
  };
  const handleDown = (): void => {
    setCount(count - 1);
  };

  const handleReset = (): void => {
    setCount(0);
  };

  // useEffect => 現状のステートに対して発火する
  useEffect(() => {
    if (count > 0 && count % 5 === 0) {
      alert("5の倍数です");
    }
    // 表示されている情報の保持
    prevCount.current = count;
  }, [count]);
  // [count] = 監視対象を指定して変化に応じて反応できる（指定しなければ無限）

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <h2>{prevCount.current}</h2>
      <h1>{count}</h1>

      <button onClick={handleUp}>up</button>
      <button onClick={handleDown}>down</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
