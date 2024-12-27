import { Appbar } from '../components/Appbar'
import {BlogCard} from '../components/BlogCard'
import SkeletonLoader from '../components/SkeletonLoader';
import { useBlogs } from '../hooks';

export default function Blogs() {
  const {loading, blogs} = useBlogs();
  if (loading) {
    return (
      <section className='h-full w-full'>
        <Appbar />
        <SkeletonLoader />
      </section>
    )
  }

  return (
    <section className='h-full w-full'>
    <Appbar />
    <div className='flex flex-col justify-center items-center h-full w-full'>
      {
        blogs.map(blog => 
          <BlogCard key={blog.id} authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate="2 days ago" id={blog.id} />)
      }
      
    </div>
    </section>
  )
}

