import styles from '~/styles/expenses.css'
import { Outlet, Link, useLoaderData } from "@remix-run/react";
import ExpensesList from '~/components/expenses/ExpensesList'
import ExpensesHeader from '~/components/navigation/ExpensesHeader'
import { FaPlus, FaDownload } from 'react-icons/fa'
import { getExpenses } from '~/data/expenses.server'

export function links() {
    return [ { rel: "stylesheet", href: styles } ]
}

// const DUMMY_EXPENSES = [
//     {
//         id: 'e1',
//         title: 'First Expense',
//         amount: 12.99,
//         date: new Date().toISOString(),
//     },
//     {
//         id: 'e2',
//         title: 'Second Expense',
//         amount: 16.99,
//         date: new Date("Feb 21").toISOString(),
//     },
//     {
//         id: 'e3',
//         title: 'Third Expense',
//         amount: 5.50,
//         date: new Date("Mar 15").toISOString(),
//     }
// ]

export default function ExpensesAppLayout() {
    const expenses = useLoaderData()
    console.log(expenses)
    return (
        <>
            <ExpensesHeader />
            <Outlet />
            <main>
                <section id="expenses-actions">
                    <Link to="add">
                        <FaPlus />
                        <span>Add Expense</span>
                    </Link>
                    <a href="/expenses/raw">
                        <FaDownload />
                        <span>Load Raw Data</span>
                    </a>
                </section>
                <ExpensesList expenses={expenses} />
            </main>
        </>
    );
}

export function loader() {
    return getExpenses()
}
