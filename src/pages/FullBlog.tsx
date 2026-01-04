import { Appbar } from "../components/Appbar"
// import { Avatar } from "../components/BlogCard"
import { Blog } from "../hooks"

export const FullBlog = ({ blog }: { blog: Blog }) => {
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
                <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-2xl pt-12">
                    <div className="col-span-8">
                        <div className="text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-slate-400 pt-2">
                            Posted on {fn(blog.createdAt)}
                        </div>
                        {/* <div className="pt-4 ">
                            {blog.content}
                        </div> */}
                        <div className="pt-4 " dangerouslySetInnerHTML={{__html: blog.content}} />
                    </div>
                    <div className="col-span-4">
                        <div className="text-slate-600 text-lg">
                            Author
                        </div>
                        <div className="flex w-full">
                            <div className="pr-4 flex flex-col justify-center">
                                {/* <Avatar size="big" name={blog.author.name || "Anonymous"} /> */}
                            </div>
                            <div>
                                <div className="text-2xl font-bold">
                                    {blog.author.name || "Anonymous"}
                                </div>
                                <div className="pt-2 text-slate-500">
                                    Software Developer @Shorthills AI
                                </div>
                                <div className="text-slate-500">
                                    NIT Jalandhar
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}