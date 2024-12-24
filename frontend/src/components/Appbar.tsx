import { SquarePen } from "lucide-react";
import { Avatar } from "./BlogCard";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";

export const Appbar = () => {
    const [isUserSignedIn, setIsUserSignedIn] = useState<boolean>(false);
    const {username} = useContext(UserContext)
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            setIsUserSignedIn(true);
        }
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem("token");
        setIsUserSignedIn(false);
        navigate("/signin");
        toast.success("Signed out successfully!");
    }

    return (
        <div className="flex justify-between items-center py-2 border-b border-slate-400 shadow-lg w-full px-4 md:px-40 sticky top-0 bg-gray-100">
            <h1 className="text-xl md:text-2xl font-bold flex items-center"><SquarePen />InkLess</h1>
            <div className="flex items-center space-x-4">
                <button 
                onClick={isUserSignedIn ? handleSignOut : () => navigate("/signin")}
                className="text-sm md:text-base bg-black rounded-lg text-white px-4 py-2 hover:scale-105 transition-all ease-in-out duration-300">
                    {isUserSignedIn ? "Sign Out" : "Sign In"}
                </button>
                <Avatar name={username} />
            </div>
        </div>
    );
};  