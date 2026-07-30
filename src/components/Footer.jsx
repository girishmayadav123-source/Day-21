import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return <footer className="footer"><p>© 2026 SmarLogixSure AMC. Dependable care, every day.</p><div><NavLink to="/portal">Client Portal</NavLink><NavLink to="/contact">Contact Support</NavLink></div><span>ISO 9001:2015 Certified</span></footer>
}

export default Footer