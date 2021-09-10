import React, { useContext, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-elements";

import Spacer from "../components/Spacer";
import Map from "../components/Map";
import { Context as LocationContext } from "./../context/LocationContext";
import useLocation from "../hooks/useLocation";

const OrderDetailsScreen = ({ navigation }) => {
  const { state, addLocation, startRecording, locations } =
    useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );
  const [err] = useLocation(callback);

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        {/* take note that map is overflowing and not following the size of this view */}
        <Map />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <Spacer>
            <Text>{err}</Text>
            {err ? (
              <Text
                style={{
                  fontSize: 18,
                  color: "red",
                  fontWeight: "bold",
                  padding: 10,
                }}
              >
                Please enable location services
              </Text>
            ) : null}
            <Button
              disabled={err}
              title="CONFIRM PICKUP"
              buttonStyle={{ backgroundColor: "green" }}
              onPress={startRecording}
            />
          </Spacer>
        </View>
      </View>
    </View>
  );
};

OrderDetailsScreen.navigationOptions = {
  title: "Order Details",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
    height: 100,
    flexDirection: "row",
  },
  buttonContainer: {
    alignSelf: "flex-end",
    flex: 1,
  },
});

export default OrderDetailsScreen;
