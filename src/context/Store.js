import React, { createContext, useReducer } from "react";
import Reducer from "./reducers";
// const [data, setData] = useState({});
const data = fetch("data/resumeData.json").then((response) => {
  return response.json();
});

data.then((res) => setData(res));

const initialState = {
  data: data,
  error: null,
};
const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
