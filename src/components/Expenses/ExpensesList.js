import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const b = props.expenses;
  console.log(b)


  return (
    <ul className="expenses_list">
   
        <ExpenseItem
        expenses={props.expenses}
          
        />
      
    </ul>
  );
};
export default ExpensesList;
