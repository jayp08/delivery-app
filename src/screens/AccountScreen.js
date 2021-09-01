import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

/*
  Context
*/
import { Context as AuthContext } from "../context/AuthContext";

import Spacer from "../components/Spacer";

const AccountScreen = () => {
  const { state, signout } = useContext(AuthContext);

  return (
    // <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
    <View style={styles.signoutContainer}>
      <Spacer>
        <Button title="Sign Out" onPress={signout}></Button>
      </Spacer>
    </View>
    // </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signoutContainer: {
    marginTop: 20,
    bottom: 0,
  },
});

export default AccountScreen;
