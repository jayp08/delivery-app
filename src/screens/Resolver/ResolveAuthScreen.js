import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../../context/AuthContext";
import { Text } from "react-native";

const ResolveAuthScreen = ({ navigation }) => {
  const { state, tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return null;
};

export default ResolveAuthScreen;
