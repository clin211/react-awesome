'use client'

import { useState } from 'react';

async function page() {
    // 用于模拟网络延迟
    // await new Promise(resolve => setTimeout(resolve, 5000))
    const [isErr, setIsErr] = useState(false);
    const handleOnClickError = () => {
        setIsErr(true)
    }

    return (
        <div>
            <p>这里是 dashboard</p>
            {isErr ? Error() :
                <button onClick={handleOnClickError}>Get Error</button>
            }
        </div>
    )
}

export default page