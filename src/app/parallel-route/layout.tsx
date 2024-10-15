import Link from "next/link";

export default function RootLayout({ analytics }: { children: React.ReactNode, analytics: React.ReactNode }) {
    return (
        <>
            <nav className='flex items-center gap-4'>
                <Link href="/parallel-route">Home</Link>
                <br />
                <Link href="/parallel-route/page-views">Page Views</Link>
                <br />
                <Link href="/parallel-route/visitors">Visitors</Link>
            </nav>
            <h1>root layout</h1>
            <div>
                {analytics}
            </div>
        </>
    );
}