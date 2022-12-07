import React from 'react'
import './Expenseitem.css'
import './ExpenseDate.js'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate.js'
import { useState } from 'react';

export default function ExpenseItem(props) {
  let a=useState(props.title);
  const [title,setTitle]=a;
const clickHandler = ()=>
{
  setTitle("updated");
  console.log(a);
}
  return (
    <>
    
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
   
    </>
  )
}
