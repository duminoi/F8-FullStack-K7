import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { initialValue, reducer } from "./reducer";
//Component này sẽ chứa global state và các logic truyền dữ liệu xuống các component của toàn bộ dự án
export const ProviderContext = createContext();
export default function Provider({ children }) {
  //Tạo state ở đây là truyền xuống children
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <ProviderContext.Provider value={{ state, dispatch }}>
      {children}
    </ProviderContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
};
