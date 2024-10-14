import { FC, PropsWithChildren } from 'react'

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
    return <section>
        <nav>dashboard nav</nav>
        {children}
    </section>
}

export default DashboardLayout