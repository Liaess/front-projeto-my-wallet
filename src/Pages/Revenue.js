import Loader from "react-loader-spinner";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../Context/UserContext";
import { useContext } from "react";
import { Main, Header, Container, Form, Input, Button } from "../Styles/ExpenseAndReveneuStyles";

function Revenue(){
    const [disable, setDisable] = useState(false);
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();
    const { user } = useContext(UserContext);

    function saveRevenue(e){
        e.preventDefault();
        if(value === "") return alert("Campo do valor não pode estar vázio!");
        if(description === "") return alert("Campo da descrição não pode estar vázio!");
        setDisable(true);
        const body = {
            name: user.user,
            value,
            description
        }
        const req = axios.post(`${process.env.REACT_APP_API_BASE_URL}/revenue`,body, {
            headers: { Authorization: `Bearer ${user.token}`}
        });
        req.then(()=>{
            history.push("/wallet");
        });
        req.catch((err)=>{
            setDisable(false);
            if(err.response.status === 500) alert("Ocorreu um imprevisto, tente novamente!");
            if(err.response.status === 400) alert("Valor digitado inválido!");
            if(err.response.status === 401){
                alert("Você foi desconectado, por favor faça um login novamente!");
                history.push("/");
                localStorage.clear();
                return
            }
        });
    }

    return(
        <Main>
            <Header>
                <p>Nova entrada</p>
            </Header>
            <Container>
                <Form onSubmit={saveRevenue}>
                    <Input 
                        type="number" 
                        disabled={disable} 
                        placeholder="Valor"
                        value={value}
                        onChange={(e)=>{setValue(e.target.value)}}
                    />
                    <Input 
                        type="text" 
                        disabled={disable} 
                        placeholder="Descrição"
                        value={description}
                        onChange={(e)=>{setDescription(e.target.value)}}
                    />
                    <Button disabled={disable} type="submit">{disable === true ? <Loader type="ThreeDots" color="#FFF" height={45} width={60}/> : "Salvar entrada" }</Button>
                    <Link to={"/wallet"}>
                        <Button>Cancelar</Button>
                    </Link>
                </Form>
            </Container>
        </Main>
    )
}

export default Revenue;