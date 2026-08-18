import PostListing from "@/components/features/blog/PostListing";
import { getAllPosts } from "@/logic/blog-api"

export default async function BlogHome(){

    const posts = await getAllPosts();

    return (
    <div>
        <h1>Blog</h1>
        { posts.map( post => (
            <PostListing key={post.id} blog={post} />
        ))}
    </div>
    )
}