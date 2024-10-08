import React, { useState } from 'react';
import { Flex, Radio, Segmented, Tabs } from 'antd';
import type { RadioChangeEvent, TabsProps } from 'antd';
import All from './all';
import SingleProduct from './single-product';
import LoadMore from './load-more';

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: '全部',
        children: <All />,
    },
    {
        key: '2',
        label: '单个产品',
        children: <SingleProduct />,
    },
    {
        key: '3',
        label: '分页',
        children: <LoadMore />,
    },
];

type Align = 'start' | 'center' | 'end';
type TabPosition = 'left' | 'right' | 'top' | 'bottom';

const Product: React.FC = () => {
    // 标签位置
    const [mode, setMode] = useState<TabPosition>('top');
    // 对齐方式
    const [alignValue, setAlignValue] = React.useState<Align>('center');

    const handleModeChange = (e: RadioChangeEvent) => {
        setMode(e.target.value);
    };

    return <>
        <Flex gap={8}>
            <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8 }}>
                <Radio.Button value="top">Horizontal</Radio.Button>
                <Radio.Button value="left">Vertical</Radio.Button>
            </Radio.Group>
            <Segmented
                defaultValue="center"
                style={{ marginBottom: 8 }}
                onChange={(value) => setAlignValue(value as Align)}
                options={['start', 'center', 'end']}
            />
        </Flex>
        <Tabs
            defaultActiveKey="1"
            tabPosition={mode}
            items={items}
            onChange={onChange}
            indicator={{ size: (origin) => origin - 20, align: alignValue }}
        />
    </>
};

export default Product;