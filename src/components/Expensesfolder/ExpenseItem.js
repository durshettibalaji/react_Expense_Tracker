import React from 'react'
import './Expenseitem.css'
import './ExpenseDate.js'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate.js'
import { changeTitile, deleterecord } from '../../Redux/Action/actions';
import { useDispatch, useSelector } from 'react-redux';
export default function ExpenseItem(props) {
  // let a=useState(props.title);
  // const [title,setTitle]=a;
const dispatch=useDispatch();
const state=useSelector((state)=>state);
const clickHandler = ()=>
{
  let c=0;
  let arr=[...state.obj.array] 
 let a= arr.filter((ele,ind)=>{
    if(ele.id===props.id)
    {
    c= ind;
    return ;
    }
  })
  dispatch(changeTitile(c));
  // console.log(state.obj.array[props.id]);
}
const DeleteHandler=()=>
{
  let c=0
  let arr=[...state.obj.array] 
 let a= arr.filter((ele,ind)=>{
    if(ele.id===props.id)
    {
    c= ind;
    }
  })
  // console.log(arr,props.id,a,c);
  arr.splice(c, 1);
//  console.log(props.id);
 dispatch(deleterecord(arr));
}
  return (
    <>
    <Card className="expense-item">

      <ExpenseDate date={new Date(props.date)} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
        <div className='expense-item__price'>{props.type}</div>
      </div>
      <button onClick={clickHandler}>Edit</button>
      <button onClick={DeleteHandler}>Delete</button>
    </Card>
    
    </>
  )
}