import { Link } from "react-router-dom"
import style from "./Profile.module.css"
import Nav from "../../components/Nav/Nav"
import { useContext } from "react"
import AuthContext from "../../context/AuthProvider"

export default function Profile() {
    const { auth } = useContext(AuthContext)

    let content
    if(!auth) {
        content = <>
            <h1 className={style.loginInfo}>Você não está logado</h1>
            <div className={style.loginSignupButton}>
                <Link className={style.linkButton} style={{borderRight: "1px solid #BDC5CD"}} to="/signup">Criar Conta</Link>
                <Link className={style.linkButton} to="/login">Entrar</Link>
            </div>
        </>
    } else {
        console.log(auth)
        content = <>
            <h1 className={style.loginInfo}>Olá, {auth.username}</h1>
        </>
    }


    return (
        <>
        <section>
            <header className={style.header}>
                <h1>Minha Conta</h1>
                <img className={style.profilePicture} src="https://placehold.co/158x158" alt="foto de perfil" />
            </header>
            { content }
        </section>
        <Nav/>
        </>
    )
}