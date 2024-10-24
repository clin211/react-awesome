import { useQuery } from '@tanstack/react-query'

const Footer = () => {
    // 发请求
    const { isPending, error, data, isFetching } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            const response = await fetch(
                'https://api.github.com/repos/TanStack/query',
            )
            return await response.json()
        },
    })
    console.log('', isPending, error, data, isFetching)
    return (
        <div>Footer</div>
    )
}

export default Footer