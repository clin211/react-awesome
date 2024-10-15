import Link from 'next/link';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const page = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await posts.json() as Post[];

    return (
        <div className="p-4 max-w-screen-md mx-auto bg-#f5f5f5">
            <div className="space-y-4">
                {data.map((post) => (
                    <Link href={`/posts/${post.id}`} key={post.id}>
                        <div className="bg-white shadow-md rounded-lg p-4 my-4 hover:shadow-lg transition-all">
                            <div className="mb-2">
                                <h2 className="text-xl font-semibold">{post.title}</h2>
                            </div>
                            <div className="text-gray-700">
                                <p>{post.body}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default page