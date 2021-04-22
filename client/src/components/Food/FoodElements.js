import styled from "styled-components";

export const FoodCardWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FoodCard = styled.div`
  width: 300px;
  background-color: #f1f1f2;
  margin: 0 8px 24px 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1);
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  display: flex;
`;

export const CardImage = styled.img`
  object-fit: cover;
  width: 300px;
  height: 200px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 8px;
`;

export const FoodRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const FoodRating = styled.span`
  color: #6e7679;
  font-weight: 600;
  font-size: 14px;
  margin-right: 2px;
  margin-top: 3px;
`;

export const FoodRatingIcon = styled.span`
  color: #f9234a;
  font-size: 20px;
`;

export const FoodName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #424749;
`;

export const StoreName = styled.span`
  color: #6e7679;
  font-weight: 600;
  font-size: 12px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 auto;
  padding: 8px;
  margin-bottom: 8px;
`;

export const FoodPrice = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #424749;
`;

export const AddButton = styled.button`
  width: 100px;
  font-size: 14px;
  background-color: #f9234a;
  padding: 8px;
  border-radius: 5px;
  color: #f1f1f2;
  display: flex;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;
