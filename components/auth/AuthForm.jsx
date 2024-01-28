import { Link, useSearchParams } from '@remix-run/react'
import { FaLock, FaUserPlus } from 'react-icons/fa'


export default function AuthForm() {
    // get the mode -- either login or signup mode
    const [ searchParams ] = useSearchParams()
    // if URL has no mode set, i.e. it is just a plain URL 
    // without something like / auth ? mode = login or / auth ? mode = signup
    // assign login mode as default
    const authMode = searchParams.get('mode') || 'login'
    const submitBtnCaption = authMode === 'login' ? 'Login' : 'Create User'
    const toggleBtnCaption = authMode === 'login' ? 'Create a new user' : 'Log in with existing user'

    return (
        <form action="post" className="form" id="auth-form">
            <div className="icon-img">
                {authMode === 'login' ? <FaLock /> : <FaUserPlus />}
            </div>
            <p>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
            </p>
            <p>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" minLength={7} />
            </p>
            <div className="form-actions">
                <button>{submitBtnCaption}</button>
                <Link to={authMode === 'login' ? '?mode=signup' : '?mode=login'}>{toggleBtnCaption}</Link>
            </div>
        </form>
    )
}