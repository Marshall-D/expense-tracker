import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenses[0].date} />

      <div className="expense-item__description">
        <h2>{props.expenses[0].title} </h2>
        <div className="expense-item__price ">${props.expenses[0].amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
