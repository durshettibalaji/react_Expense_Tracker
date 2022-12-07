import React from 'react'
import './ExpenseForm.css'
export default function ExpenseForm() {
  return (
    <form>
        <div className='new-expense__controls'>
           <div className='new-expense__control'>
            <table>Title</table>
            <input type="text" />
            </div> 
            <div className='new-expense__control'>
            <table>amount</table>
            <input type="number" min='0.01' step="0.01" />
            </div> 
            <div className='new-expense__control'>
            <table>Date</table>
            <input type="date" min="2019-01-01" max="2022-12-31" />
            </div> 
        </div>
        <div className='new-expense__actions '>
            <button type='submit'></button>
        </div>
    </form>
  )
}
