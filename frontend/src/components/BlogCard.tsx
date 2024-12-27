import { Dot } from "lucide-react";
import { Link } from "react-router-dom";

type BlogCardProps = {
    authorName : string,
    title : string,
    content : string,
    publishedDate : string,
    id : string
}

export function BlogCard({authorName,title, content, id, publishedDate} : BlogCardProps) {
  return (
    <Link to={`/blog/${id}`} className=" w-full md:max-w-2xl mx-auto space-y-4 border-b-2 border-gray-200 py-6 font-serif">
        <div className="flex space-x-2 items-center">
            <Avatar name={authorName}/> <span>{authorName}</span> <Dot /> <span className="text-gray-500">{publishedDate}</span> 
        </div>
        <div className="font-bold text-2xl">{title}</div>
        <div className="text-md ">
            {content.length > 100 ? `${content.substring(0, 100)}...` : content}
        </div>
        <div className="text-gray-500 bg-gray-200 w-fit py-1 px-2 rounded-xl text-sm">
            {`${Math.ceil(content.length / 100)} min read`}
        </div>
    </Link>
  )
}



export const Avatar = ({ name }: { name: string }) => {
    const getInitials = (name: string) => {
      const names = name.split(' ');
      const initials = names.map(name => name.charAt(0).toUpperCase()).join('');
      return initials;
    };

  
    return (
      <div
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-500 text-white font-bold"
      >
        {getInitials(name)}
      </div>
    );
  };