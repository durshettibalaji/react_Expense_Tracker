// import logo from './logo.svg';
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Epenses from "./components/Expensesfolder/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense";
import PieChart from "./components/PieChart";
import { updateallvar } from "./Redux/Action/actions";
import Veg from "./components/VegaChart";
import {updateall} from "./Redux/Action/actions";
import Vegabarchart from "./vega/Vegabarchart";
import BarChart from "./vega/BarChart";
import { BrowserRouter as Router , Routes , Route  } from "react-router-dom";

function App() {
  
  const dispatch = useDispatch();

  const arrobj=useSelector((state)=>state);
  // console.log(typeof(arrobj.obj.array));
  // const expenses=obj.obj.array;
 let expenses = arrobj.obj.array.map((ele)=> ele);
  // const expenses = [
  //   {
  //     id: "e1",
  //     title: "Books",
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   // { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: "e3",
  //     title: "Car Insurance",
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: "e4",
  //     title: "New Desk (Wooden)",
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];
// console.log(new Date(expenses[0].date));
  const addExpenseHandler = (expense) => {
    console.log("In App.js ");
  }

    const updateall = (event) => {
      let total = 0;
      let basic = 0;
      let undef = 0;
      let luxury = 0;
      let self = 0;
      let a = arrobj.obj.array.map((ele, ind) => {
        if (ele.type == "Self development") self += Number(ele.amount);
        else if (ele.type == "luxury") luxury += Number(ele.amount);
        else if (ele.type == "basic needs") basic += Number(ele.amount);
        else undef += Number(ele.amount);
        total += Number(ele.amount);
      });
      // const obj = ;
      console.log(basic, luxury, self, total, undef);
      dispatch(updateallvar({
        basic: basic,
        luxury: luxury,
        self: self,
        undef: undef,
        total: total,
      }));
    };



  return (
    <div> 
    <NewExpense onAddExpense={addExpenseHandler} /> 
    
    <Epenses expenses={expenses} />
    <button className="view_button" onClick={updateall} type="button">view Pie Chart</button>
    <PieChart />
    <Veg/>
    <BarChart/>
    </div>
  );
}

export default App;
