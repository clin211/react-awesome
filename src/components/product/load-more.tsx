import { useState } from 'react'
import { Card, List, Image, Divider, Skeleton } from 'antd'
import { useInfiniteQuery } from '@tanstack/react-query'
import InfiniteScroll from 'react-infinite-scroll-component';

import { getProductByPage } from '../../api/products'

const LoadMore = () => {

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['products'],
        queryFn: ({ pageParam }) => getProductByPage(pageParam),
        initialPageParam: 1,
        getNextPageParam: (_, all) => {
            return all.length + 1;
        }
    })

    const len = data?.pages[0].length || 0;

    if (isFetchingNextPage) {
        return <div>Loading...</div>
    }

    return (
        <main style={{ maxHeight: '400px' }}>
            <InfiniteScroll
                dataLength={len}
                next={fetchNextPage}
                hasMore={hasNextPage}
                loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >
                <List
                    grid={{
                        gutter: 12,
                        xs: 2,
                        sm: 2,
                        md: 3,
                        lg: 4,
                        xl: 5,
                        xxl: 8,
                    }}
                    style={{ flexWrap: 'wrap' }}
                    dataSource={data?.pages[0]}
                    renderItem={(product) => (
                        <List.Item style={{ border: '1px solid transparent' }}>
                            <Card
                                hoverable
                                type='inner'
                                style={{ width: 220 }}
                                cover={
                                    <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', padding: '10px' }}>
                                        <Image
                                            width={200}
                                            height={200}
                                            preview={false}
                                            src={product?.image}
                                        />
                                    </div>
                                }
                            >
                                <List.Item.Meta title={<p className='ellipsis' style={{ '--ellipsis-line': 2, height: '48px' } as React.CSSProperties} >{product.title}</p>} description={<p className='ellipsis' style={{ '--ellipsis-line': 3 } as React.CSSProperties}>{product.description}</p>} />
                            </Card>
                        </List.Item>
                    )}
                />
            </InfiniteScroll>
        </main>
    )
}

export default LoadMore