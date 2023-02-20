import { memo } from "react";
import GlobalStyles from "./globalStyles";
import { CounterProvider } from "./store/counter-context";
import Header from "./Header";
import Body from "./Body";

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
