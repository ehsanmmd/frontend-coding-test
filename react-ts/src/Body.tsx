import { memo, useCallback } from "react";
import styled from "styled-components";
import { useCounterContext } from "./store/counter-context";

const BodyArea = styled.div`
  display:inline-block;
  background: #444;
  height: 60vh;
  margin: 1rem 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const CounterButton = styled.button`
  color: #888;
  height: 100px;
  width: 50%;
  font-size: 5rem;
  border-radius: 10px;
  display: inline;
`;

function Body() {
  const { setCounter } = useCounterContext();

  const clickHandler = useCallback(() => {
    const intervalId = setInterval(() => {
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
