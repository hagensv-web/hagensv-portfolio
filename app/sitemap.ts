import { getAllPosts } from "@/logic/blog-api";
import { MetadataRoute } from "next"

interface WebPage {
    path: string,
    lastEdited: Date,
}

const staticPages: WebPage[] = [
    {
        path: "/",
        lastEdited: new Date("8-16-2026")
    },
    {
        path: "/education",
        lastEdited: new Date("8-16-2026")
    },
    {
        path: "/experience",
        lastEdited: new Date("8-16-2026")
    },
    {
        path: "/projects",
        lastEdited: new Date("8-16-2026")
    }
]


const BASE_URL = "https://hagensv.dev"
const SITEMAP_URL_LIMIT = 50_000;

export async function getAllPages() {
    const blogPosts: WebPage[] = (await getAllPosts())
        .map( post => (
            { 
                path: post.url, 
                lastEdited: new Date(post.updatedDate ?? post.publishedDate) 
            }
        ))
    
    return blogPosts.concat(staticPages)
}

export async function generateSitemaps() {
    const webPages = await getAllPages();
    const sitemapCount = Math.ceil(webPages.length / SITEMAP_URL_LIMIT);
    return Array.from({ length: sitemapCount }, (_,i) => ({ id: i }))
}

export default async function sitemap(props: {
  id: Promise<number>
}): Promise<MetadataRoute.Sitemap> {
    const id = await props.id
    const webPages = await getAllPages();

    // Google's limit is 50,000 URLs per sitemap
    const start = id * SITEMAP_URL_LIMIT
    const end = start + SITEMAP_URL_LIMIT
    return webPages.slice(start,end).map((page) => ({
        url: `${BASE_URL}${page.path}`,
        lastModified: page.lastEdited,
        changeFrequency: "weekly",
        priority: 0.7
    }))
}