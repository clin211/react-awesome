import { useQuery } from '@tanstack/react-query'
import { Card, Flex, Image } from 'antd';
import { getProductByID, getProducts, Product } from '../../api/products'
import { useState } from 'react';

const { Meta } = Card;
const SingleProduct = () => {
    // 先获取所有产品的 id，然后根据 id 获取单个产品
    const { data: allProducts, error: allProductsError } = useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: getProducts,
    });

    const [id, setId] = useState(allProducts?.[0].id)

    if (!id || allProductsError instanceof Error) {
        return <div>no product</div>
    }

    const { data, isPending } = useQuery<Product>({
        queryKey: ['product', id],
        queryFn: () => getProductByID(id),
        enabled: !!id
    });

    return (
        <>
            {id && <Flex gap={8} wrap>
                {allProducts?.map((product) => (<Image
                    key={product.id}
                    width={60}
                    height={60}
                    preview={false}
                    src={product.image}
                    className='image-box'
                    onClick={() => setId(product.id)}
                />))}
            </Flex>}
            {isPending && <div>Loading...</div>}
            {!isPending && <Card
                style={{ width: 240, marginBlockStart: '10px' }}
                cover={<div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', padding: '10px' }}>
                    <Image
                        width={200}
                        height={200}
                        preview={false}
                        src={data?.image}
                    />
                </div>}
            >
                <Meta title={data?.category} description={data?.title} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textTransform: 'uppercase', fontWeight: '600' }}>
                    <p>price: {data?.price}</p>
                    <p>rate: {data?.rating?.rate}</p>
                </div>
            </Card>}
        </>
    )
}

export default SingleProduct