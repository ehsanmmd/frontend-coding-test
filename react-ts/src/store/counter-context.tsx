import React, { useState, useContext } from "react";
import { ReactNode } from "react";

export interface ICounterContext {
  counter: number;
  setCounter(value: any): void;
}

type MyProps = {
  //   name: "My";
  children: ReactNode;
};

const CounterContext = React.createContext<ICounterContext | undefined>(
  undefined
);
const useCounterContext = (): ICounterContext => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error(
      "useProductsContext must be used within a ProductsProvider"
    );
  }

  return context;
};

const CounterProvider = (props: MyProps) => {
  const [counter, setCounter] = useState<number>(15);

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

export { CounterProvider, useCounterContext };
