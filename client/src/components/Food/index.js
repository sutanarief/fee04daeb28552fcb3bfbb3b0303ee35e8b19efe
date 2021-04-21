import React, { useState } from "react";
import styled from "styled-components";
import {
  FoodCardWrapper,
  FoodCard,
  CardImage,
  CardBody,
  FoodRatingWrapper,
  FoodRating,
  FoodRatingIcon,
  FoodName,
  StoreName,
  CardFooter,
  FoodPrice,
  AddButton,
} from "./FoodElements";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
`;
const DateText = styled.h3`
  color: #424749;
  padding: 8px;
  margin-left: 16px;
`;

const Food = () => {
  const [foods] = useState([
    {
      name: "Pizza",
      imageUrl:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      rating: 4.5,
      price: 35000,
      store: "Warung Cabut",
    },
    {
      name: "Pizza",
      imageUrl:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      rating: 4.5,
      price: 35000,
      store: "Warung Cabut",
    },
    {
      name: "Pizza",
      imageUrl:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      rating: 4.5,
      price: 35000,
      store: "Warung Cabut",
    },
    {
      name: "Pizza",
      imageUrl:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      rating: 4.5,
      price: 35000,
      store: "Warung Cabut",
    },
    {
      name: "Pizza",
      imageUrl:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      rating: 4.5,
      price: 35000,
      store: "Warung Cabut",
    },
    {
      name: "Pizza",
      imageUrl:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      rating: 4.5,
      price: 35000,
      store: "Warung Cabut",
    },
    {
      name: "Pizza",
      imageUrl:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      rating: 4.5,
      price: 35000,
      store: "Warung Cabut",
    },
    {
      name: "Pizza",
      imageUrl:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      rating: 4.5,
      price: 35000,
      store: "Warung Cabut",
    },
  ]);

  return (
    <Container>
      <DateText>Kamis, 13 Maret 2019</DateText>
      <FoodCardWrapper>
        {foods.map((food, index) => (
          <FoodCard key={index}>
            <CardImage src={food.imageUrl} alt={food.name} />
            <CardBody>
              <FoodRatingWrapper>
                <FoodRating>{food.rating}</FoodRating>
                <FoodRatingIcon className="material-icons-round">
                  star
                </FoodRatingIcon>
                <FoodRatingIcon className="material-icons-round">
                  star
                </FoodRatingIcon>
                <FoodRatingIcon className="material-icons-round">
                  star
                </FoodRatingIcon>
                <FoodRatingIcon className="material-icons-round">
                  star_half
                </FoodRatingIcon>
                <FoodRatingIcon className="material-icons-round">
                  star_outline
                </FoodRatingIcon>
              </FoodRatingWrapper>
              <FoodName>{food.name}</FoodName>
              <StoreName>by {food.store}</StoreName>
            </CardBody>
            <CardFooter>
              <FoodPrice>Rp {food.price.toLocaleString("id")} </FoodPrice>
              <AddButton>
                ADD <span className="material-icons-round">add</span>
              </AddButton>
            </CardFooter>
          </FoodCard>
        ))}
      </FoodCardWrapper>
    </Container>
  );
};

export default Food;
