import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE = {
  // user: null,
  user: {
    _id: "64639dfbf98d3a416cd31528",
    username: "jane",
    email: "jane@gmail.com",
    profilePicture: "",
    coverPicture: "",
    isAdmin: false,
    followers: [],
    followings: [],
  },

  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
