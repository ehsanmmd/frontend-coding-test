import React, { useState, useContext } from "react";

export interface ICounterContext {
  counter: number;
  // setCounter(value: any): void;
  setCounter(value: (counter: number) => number): void;
}

interface MyProps {
  children: JSX.Element | JSX.Element[];
}

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

const CounterProvider = (props: MyProps): JSX.Element => {
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
