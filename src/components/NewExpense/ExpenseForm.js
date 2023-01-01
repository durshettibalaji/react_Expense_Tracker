import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PieChart from "../PieChart";
import "./ExpenseForm.css";
import {
  setEnteredTitle,
  SetEnteredAmount,
  clearobj,
  typeUpdate,
  updateallvar,
} from "../../Redux/Action/actions";
import { SetEnteredDate, SubmitObj } from "../../Redux/Action/actions";
export default function ExpenseForm(props) {
  //=====================================
  const obj = useSelector((state) => state);
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    dispatch(typeUpdate(value));
  };



  // const [EnteredTitle, setEnteredTitle]= useState("");
  // const [EnteredAmount, SetEnteredAmount] =useState("");
  // const [EnteredDate, SetEnteredDate]=useState("");
  const titleChangeHandler = (event) => {
    dispatch(setEnteredTitle(event.target.value));
  };
  const amountChangeHandler = (event) => {
    dispatch(SetEnteredAmount(event.target.value));
  };
  const dateChangeHandler = (event) => {
    dispatch(SetEnteredDate(event.target.value));
  };
  // const [userInput,SetuserInput]=useState({
  //   EnteredTitle:"",
  //   EnteredAmount:"",
  //   EnteredDate:"",
  // })

  // const titleChangeHandler1 =(event) =>{SetuserInput((prevState)=> {
  //   return{...prevState,EnteredTitle:event.target.value};
  // })};
  // const amountChangeHandler1 = event =>{SetuserInput((prevState)=> {
  //   return{...prevState,EnteredAmount:event.target.value};
  // });};
  // const dateChangeHandler1 = event => {SetuserInput((prevState)=> {
  //   return{...prevState,EnteredTitle:event.target.value};
  // });};
  const submitHandler = (event) => {
    event.preventDefault();
    // const expenseData ={
    // title:EnteredTitle,
    // amount:EnteredAmount,
    // date:new Date(EnteredDate)
    // };
    // console.log(expenseDate);
    // props.onSaveExpenseData(expenseData);
    // setEnteredTitle("");
    // SetEnteredAmount("");
    // SetEnteredDate("");
    dispatch(SubmitObj());
    // console.log(obj.obj.obj.title);
  };

  const clearall = () => {
    dispatch(clearobj());
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <span>Title</span>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={obj.obj.obj.title}
            />
          </div>
          <div className="new-expense__control">
            <span>amount</span>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={obj.obj.obj.amount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <span>Date</span>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={obj.obj.obj.date}
              r
            />
          </div>
          <div>
            <input
              type="radio"
              onChange={changeHandler}
              name="type"
              value="basic needs"
            />
            <label>basic needs</label>

            <input
              type="radio"
              onChange={changeHandler}
              name="type"
              value="luxury"
            />
            <label>luxury</label>

            <input
              type="radio"
              onChange={changeHandler}
              name="type"
              value="Self development"
            />
            <label>Self development</label>
          </div>
        </div>
        <div className="new-expense__actions ">
          <button type="button" onClick={clearall}>
            clear
          </button>
        </div>
        <div className="new-expense__actions " >
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
