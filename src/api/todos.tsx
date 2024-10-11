
export interface Todo {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}

// 根据分页获取TODO数据
export const fetchTodosByPage = async ({ pageParam }: any): Promise<Todo[]> => {
    console.log('🚀 ~ fetchTodosByPage ~ pageParam:', pageParam)
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_delay=1000&_limit=15&_page=${pageParam}`
    );
    const data = await res.json();
    return data as Todo[];
};