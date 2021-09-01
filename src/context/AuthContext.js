import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";

import { navigate } from "../navigation/navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "error":
      return { ...state, errorMessage: action.payload };
    case "clear_err_message":
      return { ...state, errorMessage: "" };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // api request
    console.log("singup reducer");
    if (email.length > 0 && password.length > 0) {
      //   const response =  deliveryApi.post({});

      const token = "Bearer token";
      AsyncStorage.setItem("token", token);
      console.log("signin success");
      dispatch({ type: "signin", payload: token });
      navigate("DeliveryScreen");

      console.log("signup success");
    } else {
      dispatch({
        type: "error",
        payload: "Something went wrong",
      });
    }
  };
};

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    if (email.length > 0 && password.length > 0) {
      const token = "Bearer token";
      AsyncStorage.setItem("token", token);
      console.log("signin success");
      dispatch({ type: "signin", payload: token });

      navigate("OrdersScreen");
    } else {
      dispatch({
        type: "error",
        payload: "Invalid username or password",
      });
    }
  };

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_err_message" });
};

const tryLocalSignin = (dispatch) => async () => {
  console.log("token in local signin");
  const token = await AsyncStorage.getItem("token");
  if (token) {
    console.log("token:" + token);
    dispatch({ type: "signin", payload: token });

    navigate("OrdersScreen");
  } else {
    navigate("loginFlow");
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ tpye: "signout" });
  navigate("loginFlow");
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
