import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const timer1 = useRef(null);
  const timer2 = useRef(null);
  const [count1, setCount1] = useState(600);
  const [count2, setCount2] = useState(600);

  const startTimer = (timerRefOne, timerRefTwo, setTime) => {
    clearInterval(timerRefTwo.current);
    timerRefTwo.current = null;
    if (!timerRefOne.current) {
      timerRefOne.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timerRefOne.current);
            timerRefOne.current = null;
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  const resetTimer = () => {
    clearInterval(timer1.current);
    clearInterval(timer2.current);
    timer1.current = null;
    timer2.current = null;
    setCount1(600);
    setCount2(600);
  };

  useEffect(() => {
    return () => {
      clearInterval(timer1.current);
      clearInterval(timer2.current);
    };
  }, []);

  return (
    <div className="App bg-gradient-to-tr from-[#111111] via-[#878f84] to-[#32413c]">
      <div className="Div-1">
        <p className="Para">
          Timer: {Math.floor(count1 / 60)} : {count1 % 60}
        </p>
        <button
          className="Button bg-gradient-to-tr  from-[#b3b2b2] via-[#000000] to-[#949494]"
          onClick={() => startTimer(timer1, timer2, setCount1)}
        >
          Player 1
        </button>
      </div>
      <div className="Div-2">
        <p className="Para">
          Timer: {Math.floor(count2 / 60)} : {count2 % 60}
        </p>
        <button
          className="Button bg-gradient-to-tr  from-[#b3b2b2] via-[#000000] to-[#949494]"
          onClick={() => startTimer(timer2, timer1, setCount2)}
        >
          Player 2
        </button>
      </div>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
}

export default App;
