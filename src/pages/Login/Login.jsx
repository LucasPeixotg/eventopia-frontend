import { Link } from "react-router-dom"
import PageHeader from "../../components/PageHeader/PageHeader"
import StyledLink from "../../components/StyledLink/StyledLink"
import { useEffect, useRef } from "react"
import Button from '../../components/Button/Button'
import style from '../../styles/Form.module.css'
import Input from "../../components/Input/Input"

export default function Login() {
    const emailRef = useRef() 
    const passwordRef = useRef() 

    useEffect(() => {
        emailRef.current.focus()
    }, [])

    function handleEmailChange(event) {
        emailRef.current = event.target.value
    }

    function handlePasswordChange(event) {
        passwordRef.current = event.target.value
    }

    function submit() {
        alert(`email: ${emailRef} , pass: ${passwordRef}`)
    }
    
    return (
        <section className={style.section}>
            <PageHeader 
                left={<Link to="/profile">x</Link>} 
                title={"Entrar"} 
                right={<StyledLink to="/signup">Criar Conta</StyledLink>}
            />
            <form onSubmit={submit} className={style.form}>
                <Input onChange={handleEmailChange} ref={emailRef} type="text" placeholder="Email/CPF"/>
                <Input onChange={handlePasswordChange} ref={passwordRef} type="password" placeholder="Senha"/>
                <div className={style.actions}>
                    <Button type="submit">Entrar</Button>
                    <StyledLink>Esqueceu Sua Senha?</StyledLink>
                </div>
            </form>
        </section>

    )
}