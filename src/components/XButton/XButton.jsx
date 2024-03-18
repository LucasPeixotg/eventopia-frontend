import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import style from "./XButton.module.css"

export default function XButton(props) {
    return <FontAwesomeIcon icon={faXmark} {...props} className={style.button}/>
}