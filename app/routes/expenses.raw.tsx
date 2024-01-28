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

export function loader() {
    return DUMMY_EXPENSES
}