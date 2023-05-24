import { useState } from "react";

// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {

const [filteredYear,setFilteredYear]=useState("2021")

  const getFilteredYearHandler = (filteringYear) => {
    setFilteredYear(filteringYear)

    
  }
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filteredyear={filteredYear} ongetFilteredYear={getFilteredYearHandler}/>

        <ExpensesList  expenses={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
