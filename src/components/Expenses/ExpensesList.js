import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {


  return (
    <ul className="expenses_list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          amount={expense.amount}
          title={expense.title}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
