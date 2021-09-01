import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { requestBackgroundPermissionsAsync } from "expo-location";

import Spacer from "../components/Spacer";
import Map from "../components/Map";

import { navigate } from "../navigation/navigationRef";

const OrderDetailsScreen = ({ navigation }) => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      await requestBackgroundPermissionsAsync();
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        {/* take note that map is overflowing and not following the size of this view */}
        <Map />
      </View>

      {err ? <Text>Please enable location services</Text> : null}

      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <Spacer>
            <Button
              title="CONFIRM DELIVERY"
              buttonStyle={{ backgroundColor: "green" }}
              onPress={() => {
                // navigation.navigate("ConfrimOrderDeliveryScreen");
              }}
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
