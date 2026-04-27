import { Circle } from "./BlogCard"

export const BlogSkeleton = () => {
    return <div role="status" className="animate-pulse">
        <div className="article-card overflow-hidden rounded-[24px]">
            <div className="article-visual bg-white/5">
                <div className="visual-mark">
                    <div className="visual-frame">
                        <div className="visual-inner text-white/60">[]</div>
                    </div>
                </div>
            </div>
            <div className="relative z-10 px-5 pb-5 pt-4">
                <div className="flex items-center gap-3">
                    <div className="h-4 w-28 rounded-full bg-white/10"></div>
                    <Circle />
                    <div className="h-4 w-20 rounded-full bg-white/10"></div>
                </div>
                <div className="mt-4 h-6 w-5/6 rounded-full bg-white/10"></div>
                <div className="mt-3 h-6 w-2/3 rounded-full bg-white/10"></div>
                <div className="mt-5 h-4 w-full rounded-full bg-white/10"></div>
                <div className="mt-3 h-4 w-11/12 rounded-full bg-white/10"></div>
                <div className="mt-3 h-4 w-2/3 rounded-full bg-white/10"></div>
                <div className="mt-6 flex items-center justify-between">
                    <div className="h-4 w-24 rounded-full bg-white/10"></div>
                    <div className="h-4 w-16 rounded-full bg-white/10"></div>
                </div>
            </div>
        </div>
    <span className="sr-only">Loading...</span>
</div>
}
