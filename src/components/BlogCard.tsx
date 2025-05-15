import { Link } from "react-router-dom";

interface BlogCardType {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: string;
}

export const BlogCard = ({
    authorName, title, content, publishedDate,id
}: BlogCardType) => {
    return <Link to={`/blog/${id}`} >
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                {/* <Avatar name={authorName} size="small" /> */}
                <div className="font-extralight pl-2 text-sm
            flex justify-center flex-col">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col pl-2">
                    <Circle />
                </div>
                <div className="pl-2 text-slate-500 text-sm
            flex justify-center flex-col">{publishedDate}</div>
            </div>
            <div className="font-semibold text-xl pt-2">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="text-slate-500 text-sm font-thin pt-4">
                {`${Math.ceil(content.length / 100)} minutes`}
            </div>
        </div>
    </Link>
}


export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}

// export function Avatar({ name, size = "small" }: { name: string; size: "small" | "big" }) {
//     return (
//         <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small" ? 'w-6 h-6' : 'w-10 h-10'}`}>
//             <span className={` ${size === "small" ? 'text-sx' : 'text-md'} font-semibold text-white font-mono`}>{name[0]}</span>
//         </div>
//     )
// }