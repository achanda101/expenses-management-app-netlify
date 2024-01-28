import { Outlet } from '@remix-run/react'
import MainHeader from '~/components/navigation/MainHeader'
import marketingStyles from '~/styles/marketing.css'

export function links() {
    return [ { rel: 'stylesheet', href: marketingStyles } ]
}

export default function MarketingLayout() {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    )
}