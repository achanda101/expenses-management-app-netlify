
import Logo from '~/components/util/Logo'
import { NavLink } from '@remix-run/react'

export default function ExpensesHeader() {
    return (
        <header id="main-header">
            <Logo />
            <nav id="main-nav">
                <ul>
                    <li>
                        <NavLink to="/expenses">
                            Manage Expenses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/expenses/analysis">Analyse Expenses</NavLink>
                    </li>
                </ul>
            </nav>
            <nav id="cta-nav">
                <button className="cta">Logout</button>
            </nav>
        </header>
    )
}