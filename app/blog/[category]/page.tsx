import PostListing from "@/components/features/blog/PostListing";
import { getAllPostsByCategory, getPostCategories } from "@/logic/blog-api";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
    params: Promise<{category: string}>
}

export async function generateStaticParams(){
  const posts = await getPostCategories();
  return posts.map((category) => ({
    category
  }))
}

export async function generateMetaData(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { category } = await params

    return {
        title: category + "Blog",
        description: "",
    }
}

export default async function PostPage({ params }: Props) {
  
  const { category } = await params;
  const posts = await getAllPostsByCategory(category);

  const formattedCategory = category
      .split("-")
      .map(s => s.substring(0,1).toUpperCase() + s.substring(1))
      .join(" ")

  return (
    <div>
      <h1>{formattedCategory} Blog</h1>
        { posts.map( post =>
            <PostListing key={post.id} blog={post} />
        ) }
        { posts.length == 0 && <p>There are no posts in this category, check back later!</p> }
    </div>
   
  );
}