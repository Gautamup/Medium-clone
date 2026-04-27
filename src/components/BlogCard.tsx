import { Link } from "react-router-dom";

interface BlogCardType {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: string;
}

export const BlogCard = ({
    authorName, title, content, publishedDate, id
}: BlogCardType) => {
    const visualVariants = ["visual-blue", "visual-green", "visual-violet"];
    const visualSeed = `${id}-${title}`;
    const visualIndex = Math.abs(
        visualSeed.split("").reduce((accumulator, character) => accumulator + character.charCodeAt(0), 0)
    );
    const visualClass = visualVariants[visualIndex % visualVariants.length];

    return (
        <Link to={`/blog/${id}`} className="block h-full">
            <article className="article-card h-full rounded-[24px] transition duration-300 hover:-translate-y-1 hover:border-white/16 hover:shadow-[0_28px_70px_rgba(0,0,0,0.4)]">
                <div className={`article-visual ${visualClass}`} />
                <div className="relative z-10 flex h-[236px] flex-col px-5 pb-5 pt-4">
                    <div className="flex items-center gap-3 text-[15px] text-white/68">
                        <div className="font-medium text-white/88">
                            {authorName}
                        </div>
                        <Circle />
                        <div>{publishedDate}</div>
                    </div>
                    <h2 className="mt-3 text-[1.4rem] font-semibold leading-tight text-white">
                        {title}
                    </h2>
                    <div
                        className="card-copy content-fade mt-3 text-sm leading-6"
                        style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 3,
                            overflow: "hidden"
                        }}
                        dangerouslySetInnerHTML={{ __html: content.slice(0, 132) + "..." }}
                    />
                    <div className="mt-auto flex items-center justify-between pt-5 text-sm">
                        <div className="font-semibold text-white/82">
                            Engineering
                        </div>
                        <div className="content-fade">
                            {`${Math.ceil(content.length / 1000)} min read`}
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export function Circle() {
    return <div className="h-1.5 w-1.5 rounded-full bg-white/45" />;
}

// export function Avatar({ name, size = "small" }: { name: string; size: "small" | "big" }) {
//     return (
//         <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small" ? 'w-6 h-6' : 'w-10 h-10'}`}>
//             <span className={` ${size === "small" ? 'text-sx' : 'text-md'} font-semibold text-white font-mono`}>{name[0]}</span>
//         </div>
//     )
// }
