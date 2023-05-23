import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {

    const [updateExpenses, setUpdateExpenses] = useState(expenses);


    // const addExpenseHandler = (expenseData) => {
    //   setUpdatedExpenses((prevUpdateExpense) => {
  
    //     return [expenseData, ...prevUpdateExpense];
    //   });
      
    // };

  const updateExpensesDataHandler = (newExpenseData) =>{
    const updatedExpenseData =[

     
    ]
    setUpdateExpenses((prev)  => {
      return [
        newExpenseData,
        ...prev
      
      ] 

    }
    )
console.log(updateExpenses);
  }
  
  return (
    <div>
      <NewExpense onUpdateExpenses={updateExpensesDataHandler} />
      <Expenses  expenses={updateExpenses} ></Expenses>
    </div>
  );
}

export default App;
