import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";


function FullBlog({blog } : {blog : Blog}) {
    return ( 
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            {blog.title}
          </h1>
          <p className="text-gray-500">{`2 days ago`}</p> 
        </div>

        {/* Content Section */}
        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed">
            {blog.content}
          </p>
        </div>

        {/* Author Section */}
        <div className="flex flex-col md:flex-row md:items-center  border-t md:space-x-4 pt-6">
          {/* <div className="w-16 h-16 bg-gray-300 rounded-full mr-4 mb-4 md:mb-0"></div> */}
          <Avatar name={blog.author.name} />
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{blog.author.name}</h2>
            <p className="text-gray-600">
              Master of mirth, purveyor of puns, and the funniest person in the
              kingdom.
            </p>
          </div>
        </div>
      </div>
     );
  }
  
  export default FullBlog;