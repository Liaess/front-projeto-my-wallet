import { Link, useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import UserContext from "../Context/UserContext";
import { Main, Container, Form, Input, Button } from "../Styles/LoginStyles"

function Login(){
    const [disable, setDisable] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const { setUser } = useContext(UserContext);

    if(localStorage.length !== 0){
        history.push("/wallet");
    }

    function AttemptToLogin(e){
        e.preventDefault();
        if(email === "") return alert("Campo do e-mail não pode estar vázio!");
        if(password === "") return alert("Campo da senha não pode estar vázio!");
        if(password.length < 4) return alert("Campo da senha precisa ter pelo menos quatro caracteres!");
        setDisable(true);
        const body = {
            email,
            password
        }
        const req = axios.post(`${process.env.REACT_APP_API_BASE_URL}/signin`,body);
        req.then(({data})=>{
            const userData = {
                user: data.user,
                token: data.token
            }
            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData));
            history.push("/wallet")
        });
        req.catch((err)=>{
            setEmail("");
            setPassword("");
            setDisable(false);
            if(err.response.status === 400) return alert("Algum dado digitado inválido!");
            if(err.response.status === 406) return alert("Email não cadastrado!");
            if(err.response.status === 401) return alert("Email/senha incorretos!");
            if(err.response.status === 500) return alert("Ocorreu um imprevisto, tente novamente!");
        });
    }

    return(
        <Main>
            <Container>
                <h1>MyWallet</h1>
                <Form onSubmit={AttemptToLogin}>
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
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <Button disabled={disable} type="submit" >{disable === true ? <Loader type="ThreeDots" color="#FFF" height={45} width={60}/> : "Entrar" }</Button>
                </Form>
                <Link to={"/signup"}>
                    <h2>Primeira vez? Cadastre-se!</h2>
                </Link>
            </Container>
        </Main>
    )
}

export default Login