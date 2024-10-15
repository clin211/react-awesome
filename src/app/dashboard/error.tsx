'use client' // 错误组件必须是客户端组件

import { useEffect } from 'react'

export default function Error({ error, reset }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button
                onClick={
                    // 尝试恢复
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}
