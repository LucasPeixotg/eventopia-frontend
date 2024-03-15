import style from './PageHeader.module.css'
import PropTypes from 'prop-types'

function PageHeader(props) {
    return <header className={style.header}>
        {props.left}
        <h1 className={style.title}>{props.title}</h1>
        {props.right}
    </header>
}
PageHeader.propTypes = {
    left: PropTypes.element,
    right: PropTypes.element,
    title: PropTypes.string,
}


export default PageHeader