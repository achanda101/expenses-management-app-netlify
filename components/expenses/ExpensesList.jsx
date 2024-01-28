// TODO: try making ExpensesList into a const instead of a function and see if it works

import ExpenseListItem from "./ExpenseListItem";

export default function ExpensesList({ expenses }) {
    return (
        <ol id="expenses-list">
            {expenses.map((expense) => (
                <li key={expense.id}>
                    <ExpenseListItem
                        id={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                    />
                </li>
            ))}
        </ol>
    )
}