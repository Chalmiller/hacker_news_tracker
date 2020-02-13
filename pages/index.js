import Link from 'next/link';

const Index = () => (
    <div>
        <h1>Hacker News</h1>
        <Link href='/top'>
            <a>New</a>
        </Link>
        <Link href='/past'>
            <a>Past</a>
        </Link>
        <Link href='/comments'>
            <a>Comments</a>
        </Link>
        <Link href='/ask'>
            <a>Ask</a>
        </Link>
        <Link href='/show'>
            <a>Show</a>
        </Link>
        <Link href='/jobs'>
            <a>Jobs</a>
        </Link>
        <Link href='/submit'>
            <a>Submit</a>
        </Link>

    </div>
)

export default Index;