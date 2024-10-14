async function page() {
    // 用于模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 5000))
    return (
        <div>这里是 dashboard</div>
    )
}

export default page