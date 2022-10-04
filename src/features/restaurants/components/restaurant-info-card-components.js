import React from "react";
import styled from "styled-components";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import { colors } from "../../../components/utils/colors";

const Title = styled.Text`
  padding: 16px;
  color: red;
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
    <Card elevation={5} style={styles.card}>
      <Card.Cover style={styles.cover} key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};
const styles = StyleSheet.create({
  card: {
    backgrouundColor: colors.white,
  },
  cover: {
    padding: 20,
    backgroundColor: colors.white,
  },
  title: {
    padding: 16,
  },
});
