import { createContext, useEffect, useReducer } from "react";
// import axios from "axios";

import axios from "../utils/axios";
import { isValidToken, setSession } from "../utils/jwt";

const INITIALIZE = "INITIALIZE";
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";
const SIGN_UP = "SIGN_UP";
const SET_ERROR = "SET_ERROR"
const REMOVE_ERROR = "REMOVE_ERROR"

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  errMsg: "none"
};

const JWTReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
        errMsg: "none"
      };
    case SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case SIGN_UP:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case SET_ERROR:
      return {
        ...state,
        errMsg: action.payload.errMsg
      };

      case REMOVE_ERROR :
        return {
          ...state,
          errMsg: action.payload.errMsg
        }

    default:
      return state;
  }
};

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(JWTReducer, initialState);
  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem("accessToken");

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);

          const response = await axios.get("/api/auth/my-account");
          const { user } = response.data;


          dispatch({
            type: INITIALIZE,
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: INITIALIZE,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const signIn = async (email, password) => {
    try {
      const response = await axios.post("/api/auth", {
        email,
        password,
      });
      const { accessToken, user } = response.data;
      console.log("user");
      console.log(user);
      setSession(accessToken);
      dispatch({
        type: SIGN_IN,
        payload: {
          user,
        },
      });
    } catch (err) {
      
      dispatch({
        type: SET_ERROR,
        payload: {
          errMsg: err.errors[0].msg,
        },
      });
    }
  };

  const signOut = async () => {
    setSession(null);
    dispatch({ type: SIGN_OUT });
  };

  const signUp = async (email, password, firstName, lastName) => {
    const response = await axios.post("/api/auth/sign-up", {
      email,
      password,
      firstName,
      lastName,
    });
    const { accessToken, user } = response.data;

    window.localStorage.setItem("accessToken", accessToken);
    dispatch({
      type: SIGN_UP,
      payload: {
        user,
      },
    });
  };

  const resetPassword = (email) => console.log(email);

  const removeErrorMsg = () => {
    dispatch({
      type: REMOVE_ERROR,
      payload: {
        errMsg: "none",
      },
    });
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        signIn,
        signOut,
        signUp,
        resetPassword,
        removeErrorMsg,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
