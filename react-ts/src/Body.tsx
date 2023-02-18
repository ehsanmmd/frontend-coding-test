import { memo, useContext } from "react";
import styled from "styled-components";
import CounterContext from "./store/counter-context";

const BodyArea = styled.div`
  background: #444;
  height: 80vh;
  margin: 1rem 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const CounterText = styled.h1`
  color: #ccc;
  font-size: 5rem;
`;

const CounterButton = styled.button`
  color: #888;
  height: 5rem;
  width: 10rem;
  font-size: 2rem;
`;

function Body() {
  const counterCtx = useContext(CounterContext);

  const buttonClickHandler = () => {};
  return (
    <BodyArea>
      <CounterButton onClick={buttonClickHandler}>Start</CounterButton>
    </BodyArea>
  );
}

export default memo(Body);
