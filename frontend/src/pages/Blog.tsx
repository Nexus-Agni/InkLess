import { useParams } from 'react-router-dom'
import FullBlog from '../components/FullBlog'
import { useBlog } from '../hooks'
import { Appbar } from '../components/Appbar';
import SkeletonLoader from '../components/SkeletonLoader';

function Blog() {
  const {id} = useParams();
  const {blog, loading} = useBlog({id : id as string});

  if (loading || !blog) {
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
      <div className="min-h-screen bg-gray-100 font-serif p-4 flex flex-col justify-center items-center">
        <FullBlog blog={blog} key={blog.id}/>
      </div>
    </section>
  )
}

export default Blog