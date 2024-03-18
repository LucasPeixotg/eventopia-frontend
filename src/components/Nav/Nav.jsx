import { Link, useLocation } from "react-router-dom"
import style from './Nav.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"

export default function Nav() {
    const path = useLocation().pathname

    return (
        <nav className={style.nav}>
            <Link className={style.link + (path == "/"? " "+style.selected : "")} to="/">
                <FontAwesomeIcon icon={faHouse} />
            </Link>
            <Link className={style.link + (path == "/search"? " "+style.selected : "")} to="/search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
            <Link className={style.link + (path == "/profile"? " "+style.selected : "")} to="/profile">
                <FontAwesomeIcon icon={faUser} />
            </Link>
        </nav>
    )
}