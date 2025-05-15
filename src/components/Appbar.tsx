// import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"
export const Appbar = () => {
    return (
        <div className="border-b flex justify-between px-10 py-4">
            <Link to={'/blogs'} className="flex justify-center flex-col font-extrabold text-2xl font-serif">
                GG Writes
            </Link>
            <div>
                <Link to={'https://gautam-cv.vercel.app/?vercelToolbarCode=N7gM3OOkDEE9swL'}>
                    <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">My website</button>
                </Link>
                <Link to={'https://drive.google.com/file/d/1lXz-NQi140anqklgZ4SLl-aw4rVPIga-/view?usp=sharing'}>
                    <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Resume</button>
                </Link>
                {/* <Avatar name="Gautam" size={"big"} /> */}
            </div>
        </div>
    )
}