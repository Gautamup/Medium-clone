import { Link } from "react-router-dom";

export const Appbar = () => {
    return (
        <>
            <header className="fixed inset-x-0 top-0 z-30 bg-black/92 backdrop-blur-xl">
                <div className="editorial-shell">
                    <div className="-mt-1 flex items-center justify-between py-2">
                        <div className="flex items-center">
                            <Link to="/blogs" className="headline-font text-3xl font-semibold tracking-tight text-white">
                                GG Writes
                            </Link>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            <Link
                                to="https://gautam-cv.vercel.app/?vercelToolbarCode=N7gM3OOkDEE9swL"
                                className="nav-pill rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                            >
                                Projects
                            </Link>
                            <Link
                                to="https://drive.google.com/file/d/1lXz-NQi140anqklgZ4SLl-aw4rVPIga-/view?usp=sharing"
                                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
                            >
                                Resume
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <div className="h-[88px]" />
        </>
    );
};
