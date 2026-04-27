
import JoditEditor from 'jodit-react';
import { Appbar } from "../components/Appbar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useMemo} from "react";

const blogTypes = ["Engineering", "LLMs", "RAG", "Systems"];

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [blogType, setBlogType] = useState("Engineering");
    const navigate = useNavigate();

    return <div className="page-shell">
        <Appbar />
        <div className="flex justify-center w-full px-4 py-8"> 
            <div className="w-full max-w-screen-lg rounded-[28px] border border-white/10 bg-black/45 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-sm md:p-8">
                <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_220px]">
                    <input onChange={(e) => {
                        setTitle(e.target.value)
                    }} type="text" className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white outline-none placeholder:text-white/35" placeholder="Title" />
                    <select
                        value={blogType}
                        onChange={(e) => setBlogType(e.target.value)}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none"
                    >
                        {blogTypes.map((type) => (
                            <option key={type} value={type} className="bg-[#0d0d0d] text-white">
                                {type}
                            </option>
                        ))}
                    </select>
                </div>

                <TextEditor setDescription={setDescription}/>
                <button onClick={async () => {
                    if(!title || !description){
                        alert("Enter title or description")
                        return;
                    }
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content: description,
                        blog_type: blogType
                    }, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    });
                    navigate(`/blog/${response.data.id}`)
                }} type="submit" className="mt-4 inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-medium text-center text-black transition hover:bg-white/90">
                    Publish post
                </button>
            </div>
        </div>
    </div>
}


// function TextEditor({ onChange }: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
//     return <div className="mt-2">
//         <div className="w-full mb-4 ">
//             <div className="flex items-center justify-between border">
//             <div className="my-2 bg-white rounded-b-lg w-full">
//                 <label className="sr-only">Publish post</label>
//                 <textarea onChange={onChange} id="editor" rows={8} className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2" placeholder="Write an article..." required />
//             </div>
//         </div>
//        </div>
//     </div>
    
// }

const TextEditor = ({ setDescription } : any) => {
	const editor = useRef(null);


	const config = useMemo(() => ({
			readonly: false, // all options from https://xdsoft.net/jodit/docs/,
			placeholder:'Start typings...'
		}),
		[]
	);

	return (
		<JoditEditor
			ref={editor}
			value={""}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setDescription(newContent)} // preferred to use only this option to update the content for performance reasons
		/>
	);
};
