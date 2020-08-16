import React from "react";
import { Card } from "antd";
import '../styles/CocktailList.css';

const { Meta } = Card;

const CocktailList = (props) => {
  const cocktails = props.cocktails.map(
    ({ strDrink, strDrinkThumb, idDrink }) => (
      <Card
        key={idDrink}
        hoverable
        style={{ width: '21%', margin: '2%', float:'left'}}
        cover={
          <img
            alt={strDrink}
            src={strDrinkThumb}
          />
        }
      >
        <Meta style={{ fontSize: '1.5vw' }} title={strDrink} description={idDrink} />
      </Card>
    )
  );

  return <div>{cocktails}</div>;
};
// https://ant.design/components/card/#
export default CocktailList;

