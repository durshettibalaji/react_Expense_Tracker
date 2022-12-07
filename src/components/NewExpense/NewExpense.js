import React from 'react'
import './NewExpense.css';
import ExpenseFrom from "./ExpenseForm.js"
export default function NewExpense() {
  return (
    <div className='new-expense'>
     <ExpenseFrom />
    </div>
  )
}
