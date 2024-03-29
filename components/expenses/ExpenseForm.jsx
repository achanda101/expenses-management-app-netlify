import { Link, Form, useActionData, useNavigation } from "@remix-run/react"

export default function ExpenseForm() {
    const today = new Date().toISOString().slice(0, 10) // yields something like 23-10-2023
    const validationErrors = useActionData()
    const navigation = useNavigation()
    const isSubmitting = navigation.state !== 'idle'
    // const submit = useSubmit()

    // function submitHandler(event) {
    //     event.preventDefault()
    //     // Perform your own validation here
    //     // ....
    //     submit(event.target, {
    //         action: '/expenses/add',
    //         method: 'post'
    //     })
    // }

    return (
        <Form method="post" className="form" id="expense-form"
        // onSubmit={submitHandler}
        >
            <p>
                <label htmlFor="title">Expense Title</label>
                <input type="text" id="title" name="title" required maxLength={30} />
            </p>
            <div className="form-row">
                <p>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" name="amount" min="0" step="0.01" required />
                </p>
                <p>
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" max={today} required />
                </p>
            </div>
            {validationErrors && (
                <ul>
                    {Object.values(validationErrors).map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            )}
            <div className="form-actions">
                <button disabled={isSubmitting}>{isSubmitting ? 'Saving...' : 'Save Expense'}</button>
                <Link to="/expenses">Cancel</Link>
            </div>
        </Form>
    )
}