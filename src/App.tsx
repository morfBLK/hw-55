import  {useState} from 'react';
import './App.css';
import Burger from "./Burger/Burger";
import {Ingredient} from "./types";
import beefImage from './image/beef.png';
import cheeseImage from './image/cheese.png';
import lettuceImage from './image/lettuce.png';
import baconImage from './image/bacon.png';
import Component from "./Component/Component";


const INGREDIENTS: Ingredient[] = [
  {name: 'beef', ingredientPrice: 80, image: beefImage},
  {name: 'cheese', ingredientPrice: 50, image: cheeseImage},
  {name: 'lettuce', ingredientPrice: 10, image: lettuceImage},
  {name: 'bacon', ingredientPrice: 60, image: baconImage},
]

const getBurger: string [] = [];

function App() {
  const [ingredientsPrint, setIngredientsPrint] = useState([
    {name: 'beef', count: 0, id: 1},
    {name: 'cheese', count: 0, id: 2},
    {name: 'lettuce', count: 0, id: 3},
    {name: 'bacon', count: 0, id: 4},
  ])

  const price = INGREDIENTS.reduce((acc, price) => {
    ingredientsPrint.forEach(element => {
      if (price.name === element.name) {
        acc += price.ingredientPrice * element.count
      }
    })
    return acc;
  }, 30)

  const amount = (index: number) => {
    setIngredientsPrint(prev => prev.map((item) => {
      return item.id === index + 1 ? {
        ...item,
        count: item.count + 1,
      } : item;
    }))
    getBurger.push(ingredientsPrint[index].name);
  }

  const deleteAmount = (index: number) => {
    setIngredientsPrint(prev => prev.map((item)=>{
      return item.id === index + 1 && item.count ? {
        ...item,
        count: item.count - 1,
      } : item;
    }))

    const myIndex = getBurger.indexOf(ingredientsPrint[index].name);
    if (myIndex !== -1) {
      getBurger.splice(myIndex, 1);
    }
  }

  const printIngredients = INGREDIENTS.map((one) => {
    const index = INGREDIENTS.indexOf(one);
    return (
      <Component Component={one} amount={ingredientsPrint[index].count}
                 onClickAdd={() => amount(index)} key={index} onClickDelete={() => deleteAmount(index)}/>
    )
  })

  return (
    <div className="App">
      <div className={'ingredient-box'}>
        {printIngredients}
      </div>
      <div className='burger-box'>
        <Burger ingredientsBurger={getBurger} price={price}/>
      </div>
    </div>
  );
}

export default App
