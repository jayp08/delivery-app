import axios from "axios";
import { navigate } from "../navigation/navigationRef";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  // baseURL: "http://5c0a-203-125-133-90.ngrok.io/api",
  baseURL: "https://as-delivery-api.azurewebsites.net/public/api",
});

instance.interceptors.request.use(
  async (config) => {
    const access_token = await AsyncStorage.getItem("access_token");

    if (access_token) {
      config.headers.authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  (err) => {
    //return Promise.reject(err);
    navigate("SigninScreen");
  }
);

export default instance;
