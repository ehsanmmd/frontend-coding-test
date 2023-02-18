import { memo, useCallback } from "react";
import styled from "styled-components";
import { useCounterContext } from "./store/counter-context";

const BodyArea = styled.div`
  background: #444;
  height: 80vh;
  margin: 1rem 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const CounterButton = styled.button`
  color: #888;
  height: 5rem;
  width: 10rem;
  font-size: 2rem;
  border-radius: 10px;
`;

function Body() {
  const { setCounter } = useCounterContext();

  const clickHandler = useCallback(() => {
    const intervalId = setInterval(() => {
      console.log("timer");
      setCounter((counter: number) => {
        if (counter > 0) {
          return counter - 1;
        } else {
          clearInterval(intervalId);
          return 0;
        }
      });
    }, 1000);
  }, []);

  return (
    <BodyArea>
      <CounterButton onClick={clickHandler}>Start</CounterButton>
    </BodyArea>
  );
}

export default memo(Body);
