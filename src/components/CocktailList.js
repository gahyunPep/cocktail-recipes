import React from 'react';

const CocktailList = (props) => {
  
  const cocktails = props.cocktails.map(({strDrink, strDrinkThumb, idDrink}) => <div key={idDrink}>
    <img width = "50px" alt={strDrink} src={strDrinkThumb}/>
    <h2>{strDrink}</h2>
  </div>);

  return <div>{cocktails}</div>
};
// https://ant.design/components/card/#
export default CocktailList;
