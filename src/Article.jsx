import React, { useState, useEffect } from 'react';

function Article({ id }) {
    // 设置一个本地 state 用于保存 blog 内容
    const [blogContent, setBlogContent] = useState({});

    useEffect(() => {
        // useEffect 的 callback 要避免直接的 async 函数，需要封装一下
        const fetchData = async () => {
            // 当 id 发生变化时，将当前内容清楚以保持一致性
            setBlogContent(null);
            // 发起请求获取数据
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            );
            // 将获取的数据放入 state
            setBlogContent(await res.json());
        };
        fetchData();
    }, [id]); // 使用 id 作为依赖项，变化时则执行副作用

    // 如果没有 blogContent 则认为是在 loading 状态
    const isLoading = !blogContent;
    return <div>{isLoading ? 'Loading...' : blogContent?.body}</div>;
}

export default Article;
