import blogs from "../blogs.json";



export default async function Article({ params }){
    const id = params.articleId;
    const blog = blogs.items.find(item => item.id == id);

    return(
        <>
            <header className="text-4xl bg-gray-400 px-4 pb-4 pt-1 text-center">
                <img src={blog.img} className="w-[400px] mx-auto"/>
                <h1><span id="title">{blog.title}</span></h1>
            </header>
            <span>Date published {blog.datePublished}</span>
            <p id="content" className="mt-12" dangerouslySetInnerHTML={{__html: blog.content}}></p>
        </>
    );
}