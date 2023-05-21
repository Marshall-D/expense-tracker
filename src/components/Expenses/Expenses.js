import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("");

  const saveYearDataHandler = (enteredYearData) => {
    console.log("we are in expenses");
    console.log(enteredYearData);
    setEnteredYear(enteredYearData);
    console.log(enteredYear);
  };
  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter onSaveYearData={saveYearDataHandler} />

        {props.expenses.map((expenses) => (
          <ExpenseItem
          key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
      </Card>
    </div>
  );
}
export default Expenses;
