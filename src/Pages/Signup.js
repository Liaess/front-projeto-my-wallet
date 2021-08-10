import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Loader from "react-loader-spinner";
import { Main, Container, Form, Input, Button } from "../Styles/SignupStyles"

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
        const req = axios.post(`${process.env.REACT_APP_API_BASE_URL}/signup`,body);
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

export default Signup