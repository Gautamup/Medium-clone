import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { Footer } from "../components/footer";
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    blogs.sort((a, b) => {
        if (a.createdAt < b.createdAt) {
            return 1;
        }
        if (a.createdAt > b.createdAt) {
            return -1;
        }
        return 0;
    });

    if (loading) {
        return (
            <div className="page-shell">
                <Appbar />
                <main className="editorial-shell py-8">
                    <div className="grid justify-center gap-5 md:[grid-template-columns:repeat(2,minmax(0,330px))] xl:[grid-template-columns:repeat(3,minmax(0,360px))]">
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                    </div>
                </main>
            </div>
        );
    }

    const fn = (date: string) => {
        let year = date.substring(0,4);
        let month = date.substring(5,7);
        let nDate = date.substring(8,10);
        let newDate = nDate + "-" + month + "-" + year;
        return newDate;
    };

    return (
        <div className="page-shell">
            <Appbar />
            <main className="editorial-shell py-8">
                <section className="grid justify-center gap-5 md:[grid-template-columns:repeat(2,minmax(0,330px))] xl:[grid-template-columns:repeat(3,minmax(0,360px))]">
                    {blogs.map(blog => <BlogCard
                            key={blog.id}
                            id={blog.id}
                            authorName={blog.author.name || "Anonymous"}
                            title={blog.title}
                            publishedDate={fn(blog.createdAt)}
                            content={blog.content}
                        /> )}
                </section>
            </main>
            <Footer />
        </div>
    );
};
