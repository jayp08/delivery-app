import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";

/* 
    Components
*/
import Spacer from "../Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  return (
    <>
      <Spacer>
        <Text h4>{headerText}</Text>
      </Spacer>
      <Spacer />
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {headerText.toLowerCase() == "sign up" ? (
        <Input
          secureTextEntry
          label="Confirm Password"
          value={password_confirmation}
          onChangeText={setPasswordConfirmation}
          autoCapitalize="none"
          autoCorrect={false}
        />
      ) : null}

      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => {
            onSubmit({ email, password, password_confirmation });
          }}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    padding: 10,
  },
});

export default AuthForm;
