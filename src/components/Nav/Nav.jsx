import { Link } from "react-router-dom"
import style from './Nav.module.css'

export default function Nav() {
    return (
        <nav className={style.nav}>
            <Link className={style.link} to="/"></Link>
            <Link className={style.link} to="/search"></Link>
            <Link className={style.link} to="/profile"></Link>
        </nav>
    )
}