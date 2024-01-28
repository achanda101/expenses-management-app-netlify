import styles from '~/styles/expenses.css'
import ExpensesStatistics from '~/components/expenses/ExpenseStatistics'
import Chart from '~/components/expenses/Chart'
import ExpensesHeader from '~/components/navigation/ExpensesHeader'

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'First Expense',
        amount: 12.99,
        date: new Date().toISOString(),
    },
    {
        id: 'e2',
        title: 'Second Expense',
        amount: 16.99,
        date: new Date("Feb 21").toISOString(),
    },
    {
        id: 'e3',
        title: 'Third Expense',
        amount: 5.50,
        date: new Date("Mar 15").toISOString(),
    }
]

export default function AnalysisExpensesPage() {
    return (
        <>
            <ExpensesHeader />
            <main>
                <Chart expenses={DUMMY_EXPENSES} />
                <ExpensesStatistics expenses={DUMMY_EXPENSES} />
            </main>
        </>

    )
}

export function links() {
    return [ { rel: "stylesheet", href: styles } ]
}