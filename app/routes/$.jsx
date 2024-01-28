import { redirect } from "@remix-run/react";

export function loader({ params }) {
    // Suppose the route to expenses in an older version of the app is /exp
    // We can catch that and redirect to /expenses
    if (params[ '*' ] === 'exp') {
        return redirect('/expenses')
    }

    // Any other route will throw this Response
    throw new Response('Not Found', { status: 404 })
}