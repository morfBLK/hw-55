import './Burger.css'
import React from "react";
import Salad from "../Salad/Salad";
import Bacon from "../Bacon/Bacon";
import Cheese from "../Cheese/Cheese";
import Meat from "../Meat/Meat";

interface Props {
  ingredientsBurger: string[];
  price: number;
}

const Burger: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        {props.ingredientsBurger.map((item) => {
          const rand: number = Math.floor(Math.random() * 5000000000000000);
          if (item === 'lettuce') {
            return <Salad key={item + rand}/>
          } else if (item === 'bacon') {
            return <Bacon key={item + rand}/>
          } else if (item === 'cheese') {
            return <Cheese key={item + rand}/>
          } else if (item === 'beef') {
            return <Meat key={item + rand}/>
          }
          return null
        })}
        <div className="BreadBottom"></div>
      </div>
      <div className='price'>Price: {props.price}</div>
    </div>
  );
};

export default Burger;