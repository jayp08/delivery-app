import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import MapView, { Polyline, Marker, Callout } from "react-native-maps";

// "config": {
//   "googleMaps": {
//     "apiKey": "AIzaSyC76BF2yyLVWUTYHnFcGiJNVwSN9GaKhVw"
//   }
// }

const Map = () => {
  let points = [];
  let sg_lat = 1.29027;
  let sg_long = 103.851959;
  let latitude = 1.3045469;
  let longitude = 103.8333977;
  let as_latitude = 1.360265;
  let as_longitude = 103.8389356;

  // for (let i = 0; i < 20; i++) {
  //   if (i % 2 === 0) {
  //     points.push({
  //       latitude: latitude + i * 0.001,
  //       longitude: longitude + i * 0.001,
  //     });
  //   } else {
  //     points.push({
  //       latitude: latitude - i * 0.001,
  //       longitude: longitude + i * 0.001,
  //     });
  //   }
  // }

  return (
    <View style={styles.container}>
      <MapView
        style={{
          borderColor: "red",
          borderWidth: 3,
        }}
        ref={(map) => {
          this.map = map;
        }}
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
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
