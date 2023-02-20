import styled from "styled-components";
import { useCounterContext } from "./store/counter-context";
import Hamburger from "./Hamburger";
import Sidebar from "./Sidebar";
import { useState } from "react";

const HeaderArea = styled.div`
  position: relative;
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
  font-size: 10rem;
`;

function Header() {
  const { counter } = useCounterContext();

  const [hamburgerStatus, setHamburgerStatus] = useState<boolean>(false);

  return (
    <>
      <HeaderArea>
        <CounterText>{counter}</CounterText>
        <Hamburger
          onClick={() => {
            setHamburgerStatus(state => !state);
          }}
        />
      </HeaderArea>
      {hamburgerStatus && <Sidebar />}
    </>
  );
}

export default Header;
