import { useState } from "react";

// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {

 

  return (
    <div>
      <Card className="expenses">
        {/* <ExpensesFilter */}
        
        {/* /> */}
      <ExpensesList expenses={props.expenses}/>
      </Card>
    </div>
  );
}
export default Expenses;
