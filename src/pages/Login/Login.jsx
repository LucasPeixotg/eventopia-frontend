import { useNavigate } from "react-router-dom"
import PageHeader from "../../components/PageHeader/PageHeader"
import StyledLink from "../../components/StyledLink/StyledLink"
import { useState, useContext } from "react"
import Button from '../../components/Button/Button'
import style from '../../styles/Form.module.css'
import Input from "../../components/Input/Input"
import AuthContext from "../../context/AuthProvider"
import axios from "../../api/axios"
import XButton from "../../components/XButton/XButton"

const LOGIN_URL = "/auth/login"

export default function Login() {
    const navigate = useNavigate()

    const { setAuth } = useContext(AuthContext)

    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")

    async function submit(event) {
        event.preventDefault()

        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({ cpf, password }), {
                headers: { "Content-Type": "application/json",}
            })

            if(response.status === 200) {
                setAuth({ username: response.data.name, token: response.data.token })
                navigate("/")
            } else {
                console.log(response.status)
            }
        } catch(err) {
            console.log(err)
        }
    }
    
    return (
        <section className={style.section}>
            <PageHeader 
                left={<XButton onClick={() => navigate("/profile")}/>} 
                title={"Entrar"} 
                right={<StyledLink to="/signup">Criar Conta</StyledLink>}
            />
            <form onSubmit={submit} className={style.form}>
                <Input onChange={e => setCpf(e.target.value)} type="text" placeholder="CPF"/>
                <Input onChange={e => setPassword(e.target.value)} type="password" placeholder="Senha"/>
                <div className={style.actions}>
                    <Button type="submit" className={style.submit}>Entrar</Button>
                    <StyledLink>Esqueceu Sua Senha?</StyledLink>
                </div>
            </form>
        </section>

    )
}