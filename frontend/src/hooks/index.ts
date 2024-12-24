import axios from "axios";
import { useEffect, useState } from "react";

type Blog = {
    title: string;
    content: string;
    author: {
        name: string;
    };
}

export const useBlogs = () => {
    const [loading, setLoading] = useState<Boolean>(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization : `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                setBlogs(response.data.data); 
                setLoading(false);
            })
    }, [])

    return {loading, blogs}
}