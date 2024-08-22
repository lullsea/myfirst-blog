import blogs from "../blogs.json";



export default async function Article({ params }){
    const id = params.articleId;
    const blog = blogs.items[id];

    return(
        <>
            <h1><span id="title" dangerouslySetInnerHTML={{__html: blog.title}}></span></h1>
            <p id="content" dangerouslySetInnerHTML={{__html: blog.content}}></p>
        </>
    );
}