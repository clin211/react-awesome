import { FC, PropsWithChildren } from 'react'

const RootTemplate: FC<PropsWithChildren> = ({ children }) => {
    return <div>{children}</div>
}

export default RootTemplate