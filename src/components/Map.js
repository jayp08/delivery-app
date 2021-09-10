import { LocationSubscriber } from "expo-location/build/LocationSubscribers";
import React, { useContext, useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ActivityIndicator,
} from "react-native";
import MapView, { Polyline, Marker, Callout, Circle } from "react-native-maps";
import { Context as LocationContext } from "./../context/LocationContext";
// "config": {
//   "googleMaps": {
//     "apiKey": "AIzaSyC76BF2yyLVWUTYHnFcGiJNVwSN9GaKhVw"
//   }
// }

const Map = () => {
  // const map = useRef(null);
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return (
      <ActivityIndicator
        size="large"
        style={{ marginTop: 200 }}
      ></ActivityIndicator>
    );
  }

  let latitude = 1.3045469;
  let longitude = 103.8333977;
  let as_latitude = 1.360265;
  let as_longitude = 103.8389356;

  return (
    <View style={styles.container}>
      <MapView
        ref={(map) => {
          this.map = map;
        }}
        style={{
          borderColor: "red",
          borderWidth: 3,
        }}
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
        onMapReady={() => {
          this.map.fitToSuppliedMarkers(["mk1", "mk2"]);
        }}
      >
        <Marker
          coordinate={{ latitude, longitude }}
          title="Orchard"
          identifier={"mk1"}
        >
          <Callout>
            <Text>Orchard Address</Text>
          </Callout>
        </Marker>
        <Marker
          coordinate={{ latitude: as_latitude, longitude: as_longitude }}
          title="Autoscan Technology"
          identifier={"mk2"}
        >
          <Callout>
            <Text>Autoscan Address</Text>
          </Callout>
        </Marker>
        <Circle
          center={currentLocation.coords}
          radius={30}
          strokeColor="rgba(158, 158, 255, 1.0)"
          fillColor="rgba(158, 158, 255, 0.7)"
        />
        {/* <Polyline coordinates={locations.map((loc) => loc.coords)} /> */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: 100,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default Map;
