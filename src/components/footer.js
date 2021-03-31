/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer 
    className="site-footer"
    sx={{
      bg: 'primary'
    }}
  >
    <div className="container">
      <p>Feito com <span className="icon -love"><RiHeart2Line/></span> por <Link to="/">Adonias Vitorio</Link></p>
    </div>
  </footer>
)

export default Footer