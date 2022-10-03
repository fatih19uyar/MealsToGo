import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { colors } from "../../../components/utils/colors";
import { RestaurantInfo } from "../components/restaurant-info";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.searchViewStyle}>
      <Searchbar />
    </View>
    <View style={styles.listViewStyle}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchViewStyle: {
    backgroundColor: colors.white,
    padding: 16,
  },
  listViewStyle: {
    flex: 1,
    backgroundColor: colors.blue,
    padding: 16,
  },
});
