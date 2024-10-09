import { Card, List, Image } from 'antd';
import { useQuery } from '@tanstack/react-query';

import { getProducts, Product } from '../../api/products';
import "./style.css"

const All = () => {
    const { data, error, isPending } = useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: getProducts,
    });

    if (isPending) {
        return <div>Loading...</div>;
    }

    if (error instanceof Error) {
        return <div>An error has occurred: {error.message}</div>;
    }

    return <List
        grid={{
            gutter: 12,
            xs: 2,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 5,
            xxl: 8,
        }}
        rowKey={(product) => product.id}
        style={{ flexWrap: 'wrap' }}
        dataSource={data}
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
                                src={product.image}
                            />
                        </div>
                    }
                >
                    <List.Item.Meta title={<p className='ellipsis' style={{ '--ellipsis-line': 2, height: '48px' } as React.CSSProperties} >{product.title}</p>} description={<p className='ellipsis' style={{ '--ellipsis-line': 3 } as React.CSSProperties}>{product.description}</p>} />
                </Card>
            </List.Item>
        )}
    />
}

export default All