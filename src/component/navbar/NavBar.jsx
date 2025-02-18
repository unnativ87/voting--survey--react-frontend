import { Link } from "react-router-dom" 
import style from "./navbar.module.css";

function NavBar() {
    return (
        <>
            <nav id={style.nav}>
            <figure>
                <img src="/logo.png" alt="logo voting survey" title="voting survey"/>
            </figure>
            <h1 className={style.title}>Voting Survey</h1> {/* Centered Title */}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li className="g-btn"><Link to="" >Login</Link></li>
                <li className="g-btn"><Link to="">Signup</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default NavBar