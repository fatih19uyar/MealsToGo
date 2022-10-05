import React from "react";
import { StatusBar, SafeAreaView, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/restaurant-info-card-components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchView = styled(View)`
  background-color: ${(probs) => probs.theme.colors.bg.primary};
  padding: ${(probs) => probs.theme.space[3]};
`;

const ListView = styled(View)`
  flex: 1;
  background-color: ${(probs) => probs.theme.colors.bg.primary};
  padding: ${(probs) => probs.theme.space[3]};
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
