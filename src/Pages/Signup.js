import styled from "styled-components";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Loader from "react-loader-spinner";

function Signup(){
    const [disable, setDisable] = useState(false);
    const [name, setName] =useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    const [confirmPassword, setConfirmPassword] =useState("");
    const history = useHistory();

    function AttemptToSignUp(e){
        e.preventDefault();
        if(name === "") return alert("Campo do nome não pode estar vázio!");
        if(email === "") return alert("Campo do e-mail não pode estar vázio!");
        if(password === "") return alert("Campo da senha não pode estar vázio!");
        if(confirmPassword === "") return alert("Campo confirme a senha não pode estar vázio!");
        if(password.length < 4) return alert("Campo da senha precisa ter pelo menos quatro caracteres!");
        if(confirmPassword.length < 4) return alert("Campo confirme a senha precisa ter pelo menos quatro caracteres!");
        if(password !== confirmPassword) return alert("Senhas não coincidem!");
        setDisable(true);
        const body = {
            name,
            email,
            password
        }
        const req = axios.post(`http://localhost:4000/signup`,body);
        req.then(()=>{
            history.push("/")
        });
        req.catch((err)=>{
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setDisable(false);
            if(err.response.status === 400) return alert("Algum dado digitado inválido!");
            if(err.response.status === 409) return alert("Email já está em uso!");
            if(err.response.status === 500) return alert("Ocorreu um imprevisto, tente novamente!");
        });
    }

    return(
        <Main>
            <Container>
                <h1>MyWallet</h1>
                <Form onSubmit={AttemptToSignUp}>
                    <Input 
                        type="text" 
                        disabled={disable} 
                        placeholder="Nome"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                    />
                    <Input 
                        type="email" 
                        disabled={disable} 
                        placeholder="E-mail"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <Input 
                        type="password" 
                        disabled={disable} 
                        placeholder="Senha"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}>
                    </Input>
                    <Input 
                        type="password" 
                        disabled={disable} 
                        placeholder="Confirme a senha"
                        value={confirmPassword}
                        onChange={(e)=>{setConfirmPassword(e.target.value)}}
                    />
                    <Button disabled={disable} type="submit">{disable === true ? <Loader type="ThreeDots" color="#FFF" height={45} width={60}/> : "Cadastrar" }</Button>
                    <Link to={"/"}>
                        <h2>Já tem uma conta? Entre agora!</h2>
                    </Link>
                </Form>
            </Container>
        </Main>
    )
}

const Main = styled.div`
    background-color: #8c22be;
    width: 100vw;
    min-height: 100vh;
    h1{
        font-family: 'Saira Stencil One';
        color: #fff;
        font-weight: 400;
        font-size: 32px;
        padding-bottom: 25px;
    }
    h2{
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        color: #fff;
        font-size: 15px;
    }
`

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Input = styled.input`
    width: 326px;
    height: 58px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 400;
    padding-left: 15px;
    ::placeholder{
        color: #000;
    }
`

const Button = styled.button`
    background-color: #a328D6;
    width: 326px;
    height: 46px;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 35px;
`

export default Signup