import { useQuery } from '@tanstack/react-query'

const Header = () => {
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
        <div>Header</div>
    )
}

export default Header