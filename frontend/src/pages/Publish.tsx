import { Appbar } from "../components/Appbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { CreateBlogInput } from "@nexus-agni/inklesscommon";
import { toast } from "react-toastify";

export const Publish = () => {
    const [blogInputs, setBlogInputs] = useState<CreateBlogInput>({
        title: "",
        content: ""
    })
    const navigate = useNavigate();

    // const handlePublish = async () => {
    //     const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog`, blogInputs, {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem("token")}`
    //         }
    //     });
    //     navigate(`/blog/${response.data.id}`);
    // };

    const handlePublish = async () => {
        toast.promise(
            axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog`, blogInputs, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }) , {
                pending : "Publishing post...",
                success : "Post published successfully!",
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
            navigate(`/blog/${response.data.id}`);
        })
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Appbar />
            <div className="flex justify-center w-full pt-8">
                <div className="max-w-screen-lg w-full bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Publish a New Post</h1>
                    <input
                        onChange={(e) => setBlogInputs({...blogInputs, title: e.target.value})}
                        type="text"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mb-4"
                        placeholder="Title"
                    />
                    <TextEditor onChange={(e) => setBlogInputs({...blogInputs, content: e.target.value})} />
                    <button
                        onClick={handlePublish}
                        type="submit"
                        className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 transition-all ease-in-out duration-300"
                    >
                        Publish post
                    </button>
                </div>
            </div>
        </div>
    );
};

function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return (
        <div className="mt-2">
            <div className="w-full mb-4">
                <div className="flex items-center justify-between border-b pb-2 mb-2">
                    <h2 className="text-lg font-semibold text-gray-900">Content</h2>
                </div>
                <div className="my-2 bg-white rounded-b-lg w-full">
                    <label className="sr-only">Publish post</label>
                    <textarea
                        onChange={onChange}
                        id="editor"
                        rows={8}
                        className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2"
                        placeholder="Write an article..."
                        required
                    />
                </div>
            </div>
        </div>
    );
}