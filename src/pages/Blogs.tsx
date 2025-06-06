import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    // console.log(blogs)
    if (loading) {
        return <div>
            <Appbar /> 
            <div  className="flex justify-center">
                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }
    const fn = (date:string) =>{
        // console.log(date);
        let year = date.substring(0,4);
        let month = date.substring(5,7);
        let nDate = date.substring(8,10);
        let newDate = nDate + "-" + month + "-" + year;
        return newDate;
    };
    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div >
                    {blogs.map(blog => <BlogCard
                            id={blog.id}
                            authorName={blog.author.name || "Anonymous"}
                            title={blog.title}
                            publishedDate={fn(blog.createdAt)}
                            content={blog.content}
                        /> )}
                </div>
            </div>
        </div>
    )
}