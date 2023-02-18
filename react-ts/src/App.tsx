import { memo } from "react";
import styled from "styled-components";
import GlobalStyles from "./globalStyles";
import { CounterProvider } from "./store/counter-context";
import Header from "./Header";
import Body from "./Body";

const Title = styled.h1`
  color: #666;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <CounterProvider>
        <Header />
        <Body />
      </CounterProvider>
    </>
  );
}

export default memo(App);
