import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { colors } from "../../../components/utils/colors";
import { RestaurantInfoCard } from "../components/restaurant-info-card-components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchView = styled(View)`
  background-color: white;
  padding: 16px;
`;

const ListView = styled(View)`
  flex: 1;
  background-color: blue;
  padding: 16px;
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchView>
      <Searchbar />
    </SearchView>
    <ListView>
      <RestaurantInfoCard />
    </ListView>
  </SafeArea>
);
