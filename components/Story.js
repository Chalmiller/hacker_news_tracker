import fetch from 'isomorphic-unfetch';

const story_list = async function(id) {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    const data = await res.json();
    console.log(data);
    return { 
        story: data
    }
}

const Story = (props) => (
    <div>
        <p>{props}</p>
    </div>
);

export default Story;