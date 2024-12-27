import axios from "axios";
import { useEffect, useState } from "react";

export type Blog = {
    title: string;
    content: string;
    author: {
        name: string;
    };
    id : string
}

// hook to fetch a single blog using id 
export const useBlog = ({id} : {id : string}) => {
    const [loading, setLoading] = useState<Boolean>(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization : `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                setBlog(response.data.data); 
                setLoading(false);
            })
    }, [])

    return {loading, blog}
}

// hook to fetch all the blogs
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