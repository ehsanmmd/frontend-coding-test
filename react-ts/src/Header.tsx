import { memo, useContext } from "react";
import styled from "styled-components";
import CounterContext from "./store/counter-context";

const HeaderArea = styled.div`
  margin: 0;
  background: #333;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const CounterText = styled.h1`
  color: #ccc;
  font-size: 5rem;
`;

function Header() {
  const counterCtx = useContext(CounterContext);
  return (
    <>
      <HeaderArea>
        <CounterText>{counterCtx?.counter}</CounterText>
      </HeaderArea>
    </>
  );
}

export default memo(Header);
