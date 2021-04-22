import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store";
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
  const dispatch = useDispatch();
  const [foods] = useState([
    {
      name: "Pizza",
      imageUrl:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      rating: 0.0,
      price: 35000,
      store: "Pizaazip",
    },
    {
      name: "Lasagna",
      imageUrl:
        "https://images.unsplash.com/photo-1588047750516-f846a13ff314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1366&q=80",
      rating: 0.5,
      price: 85000,
      store: "Oh Lasagna na na",
    },
    {
      name: "Blueberry Toast Bread",
      imageUrl:
        "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      rating: 1.0,
      price: 20500,
      store: "Oemar Bakery",
    },
    {
      name: "Pancake with Bluberry and Orange",
      imageUrl:
        "https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 1.5,
      price: 28700,
      store: "Pancake Ode",
    },
    {
      name: "Clam and Vegetable Soup",
      imageUrl:
        "https://images.unsplash.com/photo-1560684352-8497838a2229?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGZvb2R8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 2.0,
      price: 22000,
      store: "Soup de Bourst",
    },
    {
      name: "Hamburger and Soup",
      imageUrl:
        "https://images.unsplash.com/photo-1578861256457-58a1992429f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGZvb2R8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 2.5,
      price: 36000,
      store: "Hamburgerrr",
    },
    {
      name: "Cheese Burger",
      imageUrl:
        "https://images.unsplash.com/photo-1580372648129-cb82ef5f1052?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGZvb2R8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 3.0,
      price: 35000,
      store: "Hamburgerrr",
    },
    {
      name: "Chocolate Frappe",
      imageUrl:
        "https://images.unsplash.com/photo-1447195047884-0f014b0d9288?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE4fHxmb29kfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 3.5,
      price: 17000,
      store: "Chocomulu",
    },
    {
      name: "Dark Burger",
      imageUrl:
        "https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxmb29kfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.0,
      price: 35000,
      store: "Hamburgerr",
    },
    {
      name: "Dimsum Party",
      imageUrl:
        "https://images.unsplash.com/photo-1571809890896-b196fc3cadaf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGx1bmNofGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.5,
      price: 90000,
      store: "Dimsum House",
    },
    {
      name: "Sushi",
      imageUrl:
        "https://images.unsplash.com/photo-1562131247-bd2efe88ec9e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN1c2hpfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 5.0,
      price: 45000,
      store: "Sushiap",
    },
  ]);

  const getStar = (value, index) => {
    switch (value) {
      case 0:
        return "star_outline";
      case 50:
        return "star_half";
      case 100:
        return "star";
      default:
        break;
    }
  };

  const getStars = (value) => {
    const stars = [];
    const [whole, part] = parseFloat(value).toString().split(".");
    for (let i = 0; i < whole; i++) stars.push(100);
    if (part) stars.push(50);
    for (let i = whole; i < (part ? 4 : 5); i++) stars.push(0);

    return stars;
  };

  const handleClick = (e, food) => {
    e.preventDefault();
    console.log(food.name);
    dispatch(addToCart(food));
  };

  return (
    <Container>
      <DateText>Kamis, 13 Maret 2019</DateText>
      <FoodCardWrapper>
        {foods.map((food, index) => (
          <FoodCard key={index}>
            <CardImage src={food.imageUrl} alt={food.name} />
            <CardBody>
              <FoodRatingWrapper>
                <FoodRating>
                  {food.rating.toString().length === 1
                    ? `${food.rating + ".0"}`
                    : food.rating}
                </FoodRating>
                {getStars(food.rating).map((value, index) => (
                  <FoodRatingIcon key={index} className="material-icons-round">
                    {getStar(value)}
                  </FoodRatingIcon>
                ))}
              </FoodRatingWrapper>
              <FoodName>{food.name}</FoodName>
              <StoreName>by {food.store}</StoreName>
            </CardBody>
            <CardFooter>
              <FoodPrice>Rp {food.price.toLocaleString()} </FoodPrice>
              <AddButton onClick={(e) => handleClick(e, food)}>
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
