import React from 'react';
import {Ingredient} from "../types";
import './Component.css'

interface Props {
  Component:Ingredient;
  amount: number;
  onClickAdd: React.MouseEventHandler;
  onClickDelete:React.MouseEventHandler;
}

const Component:React.FC<Props> = (props) => {
  return (
    <div className='Component-box'>
      <img src={props.Component.image} alt={props.Component.name}/>
      <span>{props.Component.name}</span>
      <span>{props.amount}</span>
      <button className='btn-add' onClick={props.onClickAdd}></button>
      <button className='btn-remove' onClick={props.onClickDelete}></button>
    </div>
  );
};

export default Component;