import styled from "styled-components";
import Loader from "react-loader-spinner";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Expense(){
    const [disable, setDisable] = useState(false);
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    function saveExpense(e){
        e.preventDefault()
        // setDisable(true)
        console.log("Feature ainda não implementada!");
    }

    return(
        <Main>
            <Header>
                <p>Nova saída</p>
            </Header>
            <Container>
                <Form onSubmit={saveExpense}>
                    <Input 
                        type="text" 
                        disabled={disable} 
                        placeholder="Valor"
                        onChange={(e)=>{setValue(e.target.value)}}
                    />
                    <Input 
                        type="text" 
                        disabled={disable} 
                        placeholder="Descrição"
                        onChange={(e)=>{setDescription(e.target.value)}}
                    />
                    <Link to={"/wallet"}>
                        <Button disabled={disable} type="submit">{disable === true ? <Loader type="ThreeDots" color="#FFF" height={45} width={60}/> : "Salvar saída" }</Button>
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
    font-family: 'Raleway', sans-serif;
`

const Header = styled.div`
    display: flex;
    color: #fff;
    font-weight: 700;
    justify-content: space-between;
    padding: 25px 25px 40px 25px;
    font-size: 22px;
`

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
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

export default Expense;