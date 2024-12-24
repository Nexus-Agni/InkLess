import { Appbar } from '../components/Appbar'
import {BlogCard} from '../components/BlogCard'

export default function Blogs() {
  return (
    <section className='h-full w-full'>
    <Appbar />
    <div className='flex flex-col justify-center items-center h-full w-full'>
      <BlogCard authorName='Agnibha' title='How test blog can contribute to the growth of your business in the future' content='This is a test blog This is a test blog This is a test blog This is a test blog This is a test blog This is a test blog This is a test blog This is a test blog This is a test blog This is a test blog' publishedDate='2023-01-01'/>
      <BlogCard authorName='Agnibha' title='How test blog can contribute to the growth of your business in the future' content='This is a test blog This is a test blog This is a test blog This is a test blog This is a test blog This is a test blog This is a test blog This is a test blog This is a test blog This is a test blog' publishedDate='2023-01-01'/>
      <BlogCard authorName='Agnibha' title='How test blog can contribute to the growth of your business in the future' content='This is a test blog This is a test blog This is a test blog This is a test blog This is a test blog This is a test blog This is a test blog This is a test blog This is a test blog This is a test blog' publishedDate='2023-01-01'/>
       
    </div>
    </section>
  )
}

