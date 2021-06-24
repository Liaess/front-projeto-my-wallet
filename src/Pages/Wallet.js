import styled from "styled-components";
import { ExitOutline } from 'react-ionicons';
import { AddCircleOutline } from 'react-ionicons';
import { RemoveCircleOutline } from 'react-ionicons';
import { Link, useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { useContext } from "react";
import axios from "axios";


function Wallet(){
    const { user } = useContext(UserContext);
    const history = useHistory();

    function logout(){
        const req = axios.post(`http://localhost:4000/logout`,{}, {
            headers: { Authorization: `Bearer ${user.token}`}
        });
        req.then(()=>{history.push("/")});
        req.catch((err)=>{
            if(err.response.status === 500) return alert("Ocorreu um imprevisto, tente novamente!");
            if(err.response.status === 401){
                alert("Você foi desconectado, por favor faça um login novamente!");
                history.push("/");
                return
            }
        });
    }

    return(
        <Main>
            <Header>
                <h1>{`Olá ${user.user}`}</h1>
                <ExitOutline
                color={'#00000'}
                height="23px"
                width="24px"
                onClick={logout}
                />
            </Header>
            <MyWallet>
                <p>Não há registros de entrada ou saída</p>
            </MyWallet>
            <Create>
                <Link to={"/revenue"}>
                    <Revenue>
                        <AddCircleOutline
                            color={'#00000'}
                            height="22px"
                            width="22px"
                        />
                        <p>Nova entrada</p>
                    </Revenue>
                </Link>
                <Link to={"/expense"}>
                    <Expense>
                        <RemoveCircleOutline
                            color={'#00000'}
                            height="22px"
                            width="22px"
                        />
                        <p>Nova saída</p>
                    </Expense>
                </Link>
            </Create>
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
    padding: 25px 25px 20px 25px;
    font-size: 22px;
`

const MyWallet = styled.div`
    display: flex;
    width: 326px;
    min-height: 446px;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &>p{ //&> filho direto
        width: 60%;
        font-weight: 400;
        text-align: center;
        color: #868686;
        font-size: 20px;
    }
`

const Create = styled.div`
    width: 326px;
    min-height: 114px;
    margin: 0 auto;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;
    color: #fff;
`

const Revenue = styled.div`
    width: 155px;
    height: 114px;
    background-color: #A328D6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0px 10px 10px;
    p{
        width: 40%;
        font-weight: 700;
    }
`

const Expense = styled.div`
    width: 155px;
    height: 114px;
    background-color: #A328D6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0px 10px 10px;
    p{
        width: 40%;
        font-weight: 700;
    }
`

export default Wallet