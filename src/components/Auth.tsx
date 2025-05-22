import { SignupInput } from "@gautamupadhyay/medium-comman";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import { BACKEND_URL } from "../config";
export const Auth = ({ type }: { type: 'signup' | 'signin' }) => {
    const navigate = useNavigate();
    const [postInputs, setpostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    })
    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === 'signup' ? 'signup' : 'signin'}`, postInputs);

            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate('/publish');
        }
        catch (e) {
            //alert user
            alert("error while signing up")
        }

    }
    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold ">
                            Create an account
                        </div>
                        <div className="text-slate-400">
                            {type === 'signin' ? 'Dont have an account?' : "Alrady have an account?"}
                            <Link className="pl-2 underline" to={type === 'signin' ? "/" : '/signin'}> {type === 'signin' ? "Sign up" : 'Sign in'}</Link>
                        </div>
                    </div>
                    <div className="pt-8">
                        {type === "signup" ? <LabelledInput label="Name" placeholder="Try dummy Name & Email" onChange={(e: any) => {
                            setpostInputs(c => ({
                                ...c,
                                name: e.target.value,
                            }))
                        }} /> : null}
                        <LabelledInput label="Username" placeholder="Gotti@gmail.com" onChange={(e: any) => {
                            setpostInputs(c => ({
                                ...c,
                                username: e.target.value,
                            }))
                        }} />
                        <LabelledInput type="password" label="Password" placeholder="12345678" onChange={(e: any) => {
                            setpostInputs(c => ({
                                ...c,
                                password: e.target.value,
                            }))
                        }} />
                        <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

interface LabelledInputType {
    label: string;
    placeholder: string;
    // onChange: (e: ChangeEvent<HTMLInputElement>)
    onChange: any,
    type?: string
}
function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-bold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}