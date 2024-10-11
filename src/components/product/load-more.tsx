import { Fragment } from 'react/jsx-runtime';
import { Divider, Empty } from 'antd'
import { useInfiniteQuery } from '@tanstack/react-query'
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchTodosByPage } from '../../api/todos';


const LoadMore = () => {

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['todos'],
        queryFn: fetchTodosByPage,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => lastPage.length ? allPages.length + 1 : undefined
    })

    const len = data?.pages.length || 0;

    if (isFetchingNextPage) {
        return <div>Loading...</div>
    }

    return (
        <main style={{ height: '400px', border: '1px solid #f0f0f0', overflowY: 'scroll' }}>
            <InfiniteScroll
                dataLength={len}
                next={fetchNextPage}
                hasMore={hasNextPage && !isFetchingNextPage}
                loader={<Empty />}
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >
                {data?.pages.map((page, i) => (
                    <Fragment key={i}>
                        {page.map((post) => (
                            <h3 key={post.id}>{post.title}</h3>
                        ))}
                    </Fragment>
                ))}
            </InfiniteScroll>
        </main>
    )
}

export default LoadMore