import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface State {
  selected: null | string | number;
}

export interface AppContextValue extends State {}

const initialState: State = {
  selected: null,
};

const AppContext = createContext({
  state: {} as State,
  setState: {} as Dispatch<SetStateAction<State>>,
  ...(initialState as AppContextValue),
});

type AppProps = {
  children: React.ReactNode;
  value?: Partial<State>;
};

function AP({ children }: AppProps) {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,
        state,
        setState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const AppProvider = AP;

export const useApp = () => useContext(AppContext);

export default AppProvider;
