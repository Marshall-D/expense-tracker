import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const b = props.expenses;
  console.log(b);

  return (
    <ul className="expenses_list">
      {props.expenses.map((expense) => {
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />;
      })}
    </ul>
  );
};
export default ExpensesList;
