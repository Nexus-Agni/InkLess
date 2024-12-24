import {Auth} from "../components/Auth"
import Quote from "../components/Quote"

function Signin() {
  return (
    <div className="grid md:grid-cols-2 h-screen">
      <Auth type="signin"/>
      <Quote/>
    </div>
  )
}

export default Signin