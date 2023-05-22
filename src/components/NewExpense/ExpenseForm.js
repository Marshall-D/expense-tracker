import { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
 


  return (
    
   <div>
<form >
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
          
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
    
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
         
          />
        </div>
      </div>
      <div style={{ display: "inline-flex" }}>
        <div className="new-expense__actions">
          <button type="button">Cancel</button>
        </div>{" "}
        <div className="new-expense__actions">
          <button  type="submit">Add Expense</button>
        </div>
       
      </div>


    </form> 
     <div className="new-expense__actions">
     <button  type="submit">Add Expense</button>
   </div>
   </div>
  );
}
export default ExpenseForm;
