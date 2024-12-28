import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import { Bounce, ToastContainer } from 'react-toastify';
import Blogs from './pages/Blogs'
import {Publish} from './pages/Publish'
import Landing from './pages/Landing'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path="/publish" element={<Publish />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
        />
    </BrowserRouter>
  )
}

export default App
