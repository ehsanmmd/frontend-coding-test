import React, { FC, useState } from "react";
import { ReactNode } from "react";

export interface ICounterContext {
  counter: number;
  setCounter(state: number): void;
}

type MyProps = {
  //   name: "My";
  children: ReactNode;
};

const CounterContext = React.createContext<ICounterContext | undefined>(
  undefined
);

export const CounterProvider = (props: MyProps) => {
  const [counter, setCounter] = useState(15);
  const CounterContextValue: ICounterContext = {
    counter,
    setCounter,
  };
  return (
    <CounterContext.Provider value={CounterContextValue}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
