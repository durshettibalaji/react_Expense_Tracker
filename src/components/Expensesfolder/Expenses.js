import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { totalUpdate } from '../../Redux/Action/actions.js';
import ExpenseItem from './ExpenseItem.js'
import  './Expenses.css';
export default function Epenses(props) {
  let sum=props.expenses.reduce((sum,ele) =>{
   return  sum+=Number(ele.amount);
  },0)
//  dispatch(totalUpdate({sum}));
  return (
    <>
    <div className='expenses'>
    {
     
      props.expenses.map((ele,indx)=>{
        return(
          <div key={indx}>
           <ExpenseItem title={ele.title} date={ele.date} amount={ele.amount} id={ele.id} type={ele.type}></ExpenseItem>
           </div>
        )

      })
    }
    
    <h1 className='total'> Total expenses <span>{sum} </span> </h1>
    
    </div>
      
    
    {/* <div className='expenses'>
  
     <ExpenseItem title={props.expenses[0].title} date={props.expenses[0].date} amount={props.expenses[0].amount}></ExpenseItem>
     <ExpenseItem title={props.expenses[1].title} date={props.expenses[1].date} amount={props.expenses[1].amount}></ExpenseItem>
     <ExpenseItem title={props.expenses[2].title} date={props.expenses[2].date} amount={props.expenses[2].amount}></ExpenseItem> 
     <ExpenseItem title={props.expenses[3].title} date={props.expenses[3].date} amount={props.expenses[3].amount}></ExpenseItem> 
    </div> */}
    </>
  )
}
