import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2020");

  const saveYearDataHandler = (enteredYearData) => {
    // console.log("we are in expenses");
    console.log(enteredYearData);
    setEnteredYear(enteredYearData);
  };
  const expenses = props.expenses.filter(
    (expenses) => expenses.date.getFullYear().toString() === enteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYear}
          onSaveYearData={saveYearDataHandler}
        />
      <ExpensesList expenses={expenses}/>
      </Card>
    </div>
  );
}
export default Expenses;
