import StyledLink from "@/components/core/StyledLink";
import { BlogPostDetails } from "@/logic/blog-api";

export default function BlogPostListing({ blog }: { blog: BlogPostDetails }){
    return (
        <div>
            <h2><StyledLink href={blog.url}>{ blog.title }</StyledLink></h2>
            <p className="text-sm">{ new Date(blog.publishedDate).toLocaleString('default', { day: 'numeric', month: 'short', year: 'numeric' }) }</p>
            <p>{ blog.description }</p>
        </div>
    )
}