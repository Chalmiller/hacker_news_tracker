import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Story from '../components/Story';

const fetchUrlData = async function(url) {
    const res = await fetch(url)
    const data = await res.json();
    return {
        title: data.title,
        url: data.url,
        id: data.id
    }
    
}

const TopStories = (props) => {
    return (
        <div>
            <h1>Top Articles</h1>
            <Link href='/'>
                <button>Home</button>
            </Link>
            <div>
                {props.stories.map(story => 
                    <li key={story.id}>
                        <Link href={`story/${story.id}`}>
                            <a>{story.url}</a>
                        </Link>
                    </li>
                    )}
            </div>
        </div>
    )
}

TopStories.getInitialProps = async function() {
    const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    const data = await res.json();
    const dataArray = ({ data });
    console.log(dataArray.data.length);
    // generate unique URLs for the most recent 50 posts on hacker news
    const storyURLS = [];
    const storyInfo = [];
    
    // Generate a list of all the top story URLs
    for (let i = 0; i < dataArray.data.length; i++) {
        storyURLS.push(`https://hacker-news.firebaseio.com/v0/item/${dataArray.data[i]}.json?print=pretty`)
    }
    const promises = await Promise.all(storyURLS.map(url => fetchUrlData(url)))
        .then(dataUrl => storyInfo.push(dataUrl))
    console.log(storyInfo[0]);
    return {
        stories: storyInfo[0]
    }
}

export default TopStories;