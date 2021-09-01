import React from "react";
import { View, StyleSheet } from "react-native";
import { ListItem, Text, Badge } from "react-native-elements";
import Spacer from "../components/Spacer";

const DeliveryDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Spacer>
          <Text style={styles.subheader}>Delivery To</Text>
          <Text style={styles.to}>201 Upper Thomson Rd, Singapore 574343</Text>
        </Spacer>
        <Spacer>
          <Text style={styles.subheader}>Delivery From</Text>
          <Text>11 Sin Ming Rd, #B1-30 Thomson V Two, Singapore 575629</Text>
        </Spacer>
        <Spacer>
          <Badge value="In Progress" status="warning" />
        </Spacer>
      </View>
    </View>
  );
};

DeliveryDetailsScreen.navigationOptions = {
  title: "My Delivery Details",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    height: 300,
    backgroundColor: "#FFF",
    margin: 20,
    padding: 20,
    borderRadius: 15,
  },
  to: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subheader: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default DeliveryDetailsScreen;
