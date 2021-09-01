import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import {
  ListItem,
  Button,
  Avatar,
  Tooltip,
  Icon,
  Text,
} from "react-native-elements";
import Spacer from "../components/Spacer";
import { navigate } from "../navigation/navigationRef";

const to = "201 Upper Thomson Rd, Singapore 574343";

const list = [
  {
    name: "The Black Sheep Cafe",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    from: "11 Sin Ming Rd, #B1-30 Thomson V Two, Singapore 575629",
    to: to,
  },
  {
    name: "The Teochew Kitchenette",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    from: "7 Tanjong Pagar Plaza, #02-102, Singapore 081007",
    to: to,
  },
  {
    name: "Sen of Japan",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    from: "2, 2 Bayfront Ave, #01 - 86, Singapore 018972",
    to: to,
  },
  {
    name: "PocoLoco",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    from: "215f Upper Thomson Rd, Singapore 574349",
    to: to,
  },
  {
    name: "Daawat Tandoori",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    from: "7 Tanjong Pagar Plaza, #02-102, Singapore 081007",
    to: to,
  },
  {
    name: "Rubicon Steak House",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    from: "200 Upper Thomson Rd, #01-04 Thomson Imperial Court, Singapore 574424",
    to: to,
  },
  {
    name: "Chai Chee Seafood Restaurant",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    from: "359 Changi Rd, Singapore 419821",
    to: to,
  },
  {
    name: "WellSmoocht",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    from: "8 Sin Ming Rd, #01-03 Sin Ming Centre, Singapore 575628",
    to: to,
  },
  {
    name: "Nam Kee Chicken Rice Restaurant",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    from: "201 Upper Thomson Rd, Singapore 574343",
    to: to,
  },
  {
    name: "Siam Square Mookata - Best Mookata Restaurant in Singapore",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    from: " 232 Upper Thomson Rd, Singapore 574363",
    to: to,
  },
  {
    name: "Parker Korean Restaurant",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    from: "209 Upper Thomson Rd, Singapore 574347",
    to: to,
  },
  {
    name: "Esarn Thai Corner Thomson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    from: "9 Thomson Ridge, Singapore 574637",
    to: to,
  },
];

const OrdersScreen = () => {
  return (
    <>
      <ScrollView>
        {list.map((l, i) => (
          <ListItem.Swipeable
            key={i}
            leftContent={
              <Button
                title="Reject"
                icon={{ name: "close", color: "white" }}
                buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
              />
            }
            rightContent={
              <Button
                title="Accept"
                icon={{ name: "info", color: "white" }}
                buttonStyle={{ minHeight: "100%" }}
                onPress={() => {
                  navigate("OrderDetailsScreen", { name: l.name });
                }}
              />
            }
          >
            <Avatar source={{ uri: l.avatar_url }} />

            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle style={styles.subitem}>
                From: {l.from}
              </ListItem.Subtitle>
              <ListItem.Subtitle style={styles.subitem}>
                To: {l.to}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem.Swipeable>
        ))}
      </ScrollView>
    </>
  );
};

OrdersScreen.navigationOptions = () => {
  return {
    title: "Orders",
    headerRight: () => (
      <Tooltip
        height={90}
        popover={<Text>Swipe items to accept or reject delivery</Text>}
      >
        <Icon
          size={18}
          name="help"
          type="entypo"
          color="#0275d8"
          iconStyle={{ paddingRight: 20 }}
        />
      </Tooltip>
    ),
  };
};

const styles = StyleSheet.create({
  subitem: {
    fontSize: 10,
  },
  chevron: {
    fontSize: 24,
  },
});

export default OrdersScreen;
