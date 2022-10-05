import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Text } from "react-native";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCard_Cover = styled(Card.Cover)`
  background-color: white;
  padding: 16px;
`;
const Title = styled(Text)`
  padding: 20px;
  color: ${(probs) => probs.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://yummyistanbul.com/wp-content/uploads/2022/05/mikla-restaurant-istanbul2-1024x1024.webp",
    ],
    address = "some random",
    openingHours = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCard_Cover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
