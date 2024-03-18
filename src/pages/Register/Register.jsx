import { Link, useNavigate } from "react-router-dom"
import PageHeader from "../../components/PageHeader/PageHeader"
import StyledLink from "../../components/StyledLink/StyledLink"
import { useState, useContext } from "react"
import Button from '../../components/Button/Button'
import style from '../../styles/Form.module.css'
import Input from "../../components/Input/Input"
import axios from '../../api/axios'
import AuthContext from "../../context/AuthProvider"


const REGISTER_URL = "/auth/register"

export default function Register() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")

    const { setAuth } = useContext(AuthContext)

    async function submit(event) {
        event.preventDefault()

        try {
            const response = await axios.post(REGISTER_URL, JSON.stringify({ name, cpf, password }), {
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
                left={<Link to="/profile">x</Link>} 
                title={"Criar Conta"} 
                right={<StyledLink to="/login">Entrar</StyledLink>}
            />
            <form onSubmit={submit} className={style.form}>
                <Input onChange={(e) => setName(e.target.value)} type="text" placeholder="Nome"/>
                <Input type="email" placeholder="Email"/>
                <Input onChange={(e) => setCpf(e.target.value)} type="text" placeholder="CPF"/>
                <Input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha"/>
                <div className={style.actions}>
                    <Button type="submit">Criar</Button>
                    <StyledLink to="/login">Já possui uma conta?</StyledLink>
                </div>
            </form>
        </section>

    )
}