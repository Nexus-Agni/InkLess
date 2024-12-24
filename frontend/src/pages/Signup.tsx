import {Auth} from "../components/Auth"
import Quote from "../components/Quote"

function Signup() {
  return (
    <div className="grid md:grid-cols-2 h-screen">
      <Auth type="signup"/>
      <Quote/>
    </div>
  )
}

export default Signup