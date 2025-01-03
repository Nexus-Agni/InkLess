import { ChangeEvent, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { SigninInput, SignupInput } from '@nexus-agni/inklesscommon';
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { UserContext } from '../context/UserContext';

export function Auth({type}: {type : "signup" | "signin"}) {
    const navigate = useNavigate();
    const [signUpInputs, setSignUpInputs] = useState<SignupInput>({
        name : "",
        email : "",
        password : ""
    })

    const [signInInputs, setSignInInputs] = useState<SigninInput>({
        email : "",
        password : ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const { setUsername } = useContext(UserContext);

    const sendRequest = async (e: any) => {
        e.preventDefault();
        if (type === "signin") {
            toast.promise(
                axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signin`, signInInputs),
                {
                    pending: "Signing in...",
                    success: "Signed in successfully!",
                    error: {
                        render({ data }) {
                            // `data` is the error object
                            if (axios.isAxiosError(data) && data.response) {
                                return data.response.data.message;
                            }
                            return "An unexpected error occurred";
                        }
                    }
                }
            ).then((response) => {
                const jwt = response.data.jwt;
                localStorage.setItem("token", jwt);
                setUsername(response.data.name);
                navigate("/blogs");
            });
        } else {
            toast.promise(
                axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signup`, signUpInputs),
                {
                    pending: "Signing up...",
                    success: "Signed up successfully!",
                    error: {
                        render({ data }) {
                            // `data` is the error object
                            if (axios.isAxiosError(data) && data.response) {
                                return data.response.data.message;
                            }
                            return "An unexpected error occurred";
                        }
                    }
                }
            ).then((response) => {
                const jwt = response.data.jwt;
                localStorage.setItem("token", jwt);
                navigate("/blogs");
            })
        }
    };

    return (
        <div className="flex justify-center items-center">
            <div className="space-y-4 md:w-1/2 ">
                <h1 className="text-3xl text-center font-bold">Create an Account</h1>
                <h2 className="text-center text-gray-500 font-semibold">
                    {type === "signin" ? "Don't have an account? " : "Already have an account?"}
                    <Link to={type === "signin" ? "/signup" : "/signin"} className="hover:underline"> {type === "signin" ? "Sign up" : "Sign in"}</Link></h2>
                <form className="space-y-2"> 
                    {type === "signup" ? (<LabelledInput label="Name" placeholder="Enter your Name" 
                        onChange={(e) => {
                            setSignUpInputs({
                                ...signUpInputs,
                                name : e.target.value
                            })
                        }} />):null}
                    <LabelledInput label="Email" placeholder="example@gmail.com" 
                        onChange={(e) => {
                           if (type === "signin") {
                            setSignInInputs({
                                ...signInInputs,
                                email : e.target.value
                            })
                           } else {
                            setSignUpInputs({
                                ...signUpInputs,
                                email : e.target.value
                            })
                           }
                        }} />
                    <LabelledInput 
                        label="Password" 
                        type={showPassword ? 'text' : 'password'} 
                        placeholder="Enter your Password" 
                        onChange={(e) => {
                            if (type === "signin") {
                                setSignInInputs({
                                    ...signInInputs,
                                    password : e.target.value
                                })
                            } else {
                                setSignUpInputs({
                                    ...signUpInputs,
                                    password : e.target.value
                                })
                            }
                        }} 
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                    />
                    
                    <div className="my-2">
                        <button type="submit"
                        onClick={sendRequest}
                        className="bg-black hover:scale-105 transition-all ease-in-out duration-300 text-white font-semibold py-2 px-4 rounded-md w-full">
                            {type === "signin" ? "Sign In" : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

type LabelledInputProps = {
    label: string;
    placeholder: string;
    onChange: (e : ChangeEvent<HTMLInputElement>) => void;
    type? : string;
    showPassword?: boolean;
    setShowPassword?: (show: boolean) => void;
}

const LabelledInput = ({label, type, placeholder, onChange, showPassword, setShowPassword} : LabelledInputProps) => {
    return (
        <div className="relative space-y-1">
            <label htmlFor="" className="font-semibold">{label}</label>
            <input onChange={onChange} type={type || "text"} required placeholder={placeholder} className="border border-gray-300 rounded-md p-2 w-full" />
            {label === "Password" && setShowPassword && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-10 transform -translate-y-1/2"
                >
                    {showPassword ? <EyeOff /> : <Eye />}
                </button>
            )}
        </div>
    )
}