import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import UserContext from "../Context/UserContext";

function Login(){
    const [disable, setDisable] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const { setUser } = useContext(UserContext);

    function AttemptToLogin(e){
        e.preventDefault();
        setDisable(true);
        if(email === "") return alert("Campo do e-mail não pode estar vázio!");
        if(password === "") return alert("Campo da senha não pode estar vázio!");
        const body = {
            email,
            password
        }
        const req = axios.post(`http://localhost:4000/signin`,body);
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

export default Login