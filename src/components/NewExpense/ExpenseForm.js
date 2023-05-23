import { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [toggleView, setToggleView] = useState(false);
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const toggleviewHandler = () => {
    setToggleView(!toggleView);
  };
  const amountSubmitHandler = (event) => {
    setEnteredAmount(event.target.value)
    // const enteredAmount = event.target.value;

  }; const titleSubmitHandler = (event) => {
    setEnteredTitle(event.target.value)
    // const enteredAmount = event.target.value;

  }; const dateSubmitHandler = (event) => {
    setEnteredDate(event.target.value)
    // const enteredAmount = event.target.value;

  };
  const submitHandler = (event) =>{
    event.preventDefault();
    // console.log(enteredAmount) 
    // console.log(enteredTitle) 
    // console.log(enteredDate) 
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");

    const expenseData = {
      title:enteredTitle,
      amount:enteredAmount,
      date: new Date(enteredDate)
    }
props.updateExpenses(expenseData)
    // console.log(expenseData)

  }

  return (
    <div>
      {!toggleView && (
        <form onSubmit={submitHandler}> 
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input  value={enteredTitle} onChange={titleSubmitHandler} type="text" />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input value={enteredAmount} onChange={amountSubmitHandler} type="number" min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input   value={enteredDate} onChange={dateSubmitHandler} type="date" min="2019-01-01" max="2022-12-31" />
            </div>
          </div>
          <div style={{ display: "inline-flex" }}>
            <div className="new-expense__actions">
              <button onClick={toggleviewHandler} type="button">
                Cancel
              </button>
            </div>{" "}
            <div className="new-expense__actions">
              <button type="submit">Add Expense</button>
            </div>
          </div>
        </form>
      )}
      {toggleView && (
        <div className="new-expense__actions">
          <button onClick={toggleviewHandler} type="submit">
            Add Expense
          </button>
        </div>
      )}
    </div>
  );
}
export default ExpenseForm;
