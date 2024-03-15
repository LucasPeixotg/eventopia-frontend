import { Link } from "react-router-dom";
import style from './StyledLink.module.css'
import PropTypes from 'prop-types'

function StyledLink(props) {
    return <Link className={style.link} to={props.to}>{props.children}</Link>
}

StyledLink.propTypes = {
    to: PropTypes.string,
    children: PropTypes.any
}
StyledLink.defaultProps = {
    to: "/",
    children: ""
}

export default StyledLink