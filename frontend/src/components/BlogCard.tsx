import { Dot } from "lucide-react";

type BlogCardProps = {
    authorName : string,
    title : string,
    content : string,
    publishedDate : string
}

export function BlogCard({authorName,title, content, publishedDate} : BlogCardProps) {
  return (
    <div className=" w-full md:max-w-2xl mx-auto space-y-4 border-b-2 border-gray-200 py-6 font-serif">
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
    </div>
  )
}



export const Avatar = ({ name }: { name: string }) => {
    const getInitials = (name: string) => {
      const names = name.split(' ');
      const initials = names.map(name => name.charAt(0).toUpperCase()).join('');
      return initials;
    };
  
    const colors = [
      '#FF5733', // Red
      '#33FF57', // Green
      '#3357FF', // Blue
      '#FF33A1', // Pink
      '#FF8C33', // Orange
      '#8C33FF', // Purple
      '#FFD700', // Gold
    ];
  
    const getRandomColor = () => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    };
  
    const color = getRandomColor();
  
    return (
      <div
        className="flex items-center justify-center w-10 h-10 rounded-full text-white font-bold"
        style={{ backgroundColor: color }}
      >
        {getInitials(name)}
      </div>
    );
  };