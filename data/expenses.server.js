import { prisma } from "./database.server"

// expenseData.title --> title is coming from the name in the ExpenseForm.
// +expenseData.amount --> a + sign is added to convert to a number because 
// data from a form (ExpenseForm) is always a string even if you put type as 
// number in the form(type = number is only meant for client-side validation 
// and how the input is displayed to the user).
// Date obtained from the ExpenseForm is a string and should be converted to 
// a date object (new Date()) which is what Prisma(and MongoDB) expects
export async function addExpense(expenseData) {
    try {
        return await prisma.expense.create({
            data: {
                title: expenseData.title,
                amount: +expenseData.amount,
                date: new Date(expenseData.date)
            }
        })
    } catch (error) {
        console.log(error)
        throw error
    }

}
export async function getExpenses() {
    try {
        const expenses = await prisma.expense.findMany({ orderBy: { dateAdded: 'desc' } })
        return expenses
    } catch (error) {
        console.log(error)
        throw error
    }
}