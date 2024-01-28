import { useNavigate, useRouteError, isRouteErrorResponse, Link } from "@remix-run/react"
import { redirect } from "@remix-run/node"
import ExpenseForm from '~/components/expenses/ExpenseForm'
import Modal from '~/components/util/Modal'
// since the filename has .server in it, Remix will add the code 
// only into the backend code bundle
import { addExpense } from '~/data/expenses.server'
import { validateExpenseInput } from '~/data/validation.server'


export default function AddExpensesPage() {
    const navigate = useNavigate()
    function closeHandler() {
        //navigate programmatically
        navigate('/expenses')
    }

    return (
        <main>
            <Modal onClose={closeHandler}>
                <h3>You are in the expenses.add.jsx file</h3>
                <ExpenseForm />
            </Modal>
        </main>
    )
}


export async function action({ request }) {
    const formData = await request.formData()
    // convert the formData into an Object of key-value pairs
    // instead of calling get() for each form value eg: formData.get('title')
    const expenseData = Object.fromEntries(formData)
    console.log(expenseData)

    // Add server-side validation because client-side validation 
    // can be circumvented by changing the HTML using dev tools
    // validation.server.js repeats the validation done on the client-side
    // and here the user cannot circumvent it
    try {
        validateExpenseInput(expenseData)
    } catch (error) {
        // We are not going to pass the error to be caught by ErrorBoundary
        // Instead we will display the key-value pairs in the error object
        // inside the Expense form -- useActionData() hook
        return (error)
    }

    await addExpense(expenseData)
    return redirect('/expenses')
}


export function ErrorBoundary() {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        // When true, this is what used to go to `CatchBoundary` in Remix v1
        // Is the Route Error a response? Yes
        return (
            <main>
                <div className="error">
                    <h2>An error occurred while retrieving saved expenses. (CatchBoundary)</h2>
                    <p>Status: {error.status}</p>
                    <p>Status Text: {error.statusText}</p>
                    <p>{error.data}</p>
                </div>
            </main>
        )
    } else if (error instanceof Error) {
        return (
            <main className='error'>
                <h2>An error occurred while retrieving saved expenses.</h2>
                <p>{error.message}</p>
                <br />
                <p>Back to <Link to="/">Safety!</Link></p>
            </main>
        )
    } else {
        return (
            <main className='error'>
                <h2>An error occurred while retrieving saved expenses.</h2>
                <p>Unknown Error</p>
                <p>Back to <Link to="/">Safety!</Link></p>
            </main>
        )
    }
}