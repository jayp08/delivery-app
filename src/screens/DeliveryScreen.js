import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ListItem, Avatar, Badge, Button, Text } from "react-native-elements";
import Spacer from "../components/Spacer";

const list = [
  {
    name: "Parker Korean Restaurant",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    from: "209 Upper Thomson Rd, Singapore 574347",
    to: "232 Upper Thomson Rd, Singapore 574363",
    status: "In Progress",
    status_color: "warning",
  },
  {
    name: "Esarn Thai Corner Thomson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    from: "9 Thomson Ridge, Singapore 574637",
    to: "232 Upper Thomson Rd, Singapore 574363",
    status: "Delivered",
    status_color: "success",
  },
];

const DeliveryScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.mainContainer}>
        <ScrollView>
          {list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar source={{ uri: l.avatar_url }} />
              <ListItem.Content>
                <ListItem.Title>{l.to}</ListItem.Title>
                <ListItem.Subtitle style={{ marginBottom: 5 }}>
                  From {l.from}
                </ListItem.Subtitle>
                <Badge value={`${l.status}`} status={`${l.status_color}`} />
              </ListItem.Content>
              <ListItem.Chevron
                onPress={() => {
                  navigation.navigate("DeliveryDetailsScreen");
                }}
              />
            </ListItem>
          ))}
        </ScrollView>
      </View>
      <View style={styles.bottomContainer}>
        <Spacer>
          <Button
            title="SHIFT STARTED"
            onPress={() => {
              // navigation.navigate("ConfrimOrderDeliveryScreen");
            }}
            disabled
          />
        </Spacer>
      </View>
    </>
  );
};

DeliveryScreen.navigationOptions = {
  title: "My Delivery",
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  bottomContainer: {
    height: 70,
  },
});

export default DeliveryScreen;
