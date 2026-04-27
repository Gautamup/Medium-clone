import { Appbar } from "../components/Appbar"
import { Footer } from "../components/footer";
// import { Avatar } from "../components/BlogCard"
import { Blog } from "../hooks"

export const FullBlog = ({ blog }: { blog: Blog }) => {
    const fn = (date:string) =>{
        let year = date.substring(0,4);
        let month = date.substring(5,7);
        let nDate = date.substring(8,10);
        let newDate = nDate + "-" + month + "-" + year;
        return newDate;
    };
    return (
        <div className="page-shell">
            <Appbar />
            <main className="editorial-shell py-12">
                <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[minmax(0,760px)_280px] lg:justify-center">
                    <article className="min-w-0">
                        <div className="max-w-[760px]">
                            <div className="text-5xl font-extrabold leading-[0.95] md:text-7xl">
                            {blog.title}
                            </div>
                            <div className="pt-3 text-xl text-sky-300">
                                Posted on {fn(blog.createdAt)}
                            </div>
                            <div className="blog-body pt-8" dangerouslySetInnerHTML={{__html: blog.content}} />
                        </div>
                    </article>
                    <aside className="lg:pt-10">
                        <div className="rounded-[24px] border border-white/8 bg-black/30 p-6 backdrop-blur-sm">
                            <div className="text-lg text-slate-500">
                                Author
                            </div>
                            <div className="pt-3">
                                <div className="text-2xl font-bold text-white">
                                    {blog.author.name || "Anonymous"}
                                </div>
                                <div className="pt-3 text-slate-500">
                                    AI Engineer @Shorthills AI
                                </div>
                                <div className="text-slate-500">
                                    NIT Jalandhar
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
            <Footer />
        </div>
    )
}
