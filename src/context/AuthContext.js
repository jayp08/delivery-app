import createDataContext from "./createDataContext";
import deliveryApi from "../api/deliveryApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { navigate } from "../navigation/navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "error":
      return { ...state, errorMessage: action.payload };
    case "clear_err_message":
      return { ...state, errorMessage: "" };
    case "signin":
      return { errorMessage: "", access_token: action.payload };
    case "signout":
      return { access_token: null, errorMessage: "" };
    default:
      return state;
  }
};

const signup =
  (dispatch) =>
  async ({ email, password, password_confirmation }) => {
    // api request
    console.log("singup reducer");
    if (
      email.length > 0 &&
      password.length > 0 &&
      password_confirmation.length > 0
    ) {
      try {
        const response = await deliveryApi.post("/auth/register", {
          username: email,
          password,
          password_confirmation,
        });

        await AsyncStorage.setItem("access_token", response.data.access_token);

        dispatch({ type: "signin", payload: response.data.access_token });

        navigate("OrdersScreen");
      } catch ($err) {
        dispatch({
          type: "error",
          payload: "Invalid username or password",
        });
      }
    } else {
      dispatch({
        type: "error",
        payload: "Please enter required fields",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password, password_confirmation = "" }) => {
    if (email.length > 0 && password.length > 0) {
      try {
        const response = await deliveryApi.post("/auth/login", {
          username: email,
          password,
        });

        const access_token = response.data.access_token;
        await AsyncStorage.setItem("access_token", access_token);
        console.log("signin");
        console.log(access_token);
        dispatch({ type: "signin", payload: access_token });

        navigate("OrdersScreen");
      } catch ($err) {
        console.log($err);
        dispatch({
          type: "error",
          payload: "Invalid username or password",
        });
      }
    } else {
      dispatch({
        type: "error",
        payload: "Please enter username and password",
      });
    }
  };

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_err_message" });
};

const tryLocalSignin = (dispatch) => async () => {
  console.log("token in local signin");
  const access_token = await AsyncStorage.getItem("access_token");
  if (access_token) {
    console.log("access_token:" + access_token);
    dispatch({ type: "signin", payload: access_token });

    navigate("OrdersScreen");
  } else {
    navigate("loginFlow");
  }
};

const signout = (dispatch) => async () => {
  await deliveryApi.post("/auth/logout");
  dispatch({ tpye: "signout" });
  await AsyncStorage.removeItem("access_token");
  navigate("loginFlow");
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { access_token: null, errorMessage: "" }
);
