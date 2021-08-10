import { ExitOutline } from 'react-ionicons';
import { AddCircleOutline } from 'react-ionicons';
import { RemoveCircleOutline } from 'react-ionicons';
import { Link, useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import Transaction from "../Component/Transaction";
import Loading from "../Component/Loading";
import { Main, Header, MyWallet, History, Price, EmptyBox, Create, Revenue, Expense, Balance } from "../Styles/WalletStyles"

function Wallet(){
    const { user } = useContext(UserContext);
    const [transactions, setTransactions] = useState([]);
    const [isWaitingServer, setIsWaitingServer] = useState(true);
    const history = useHistory();

    function logout(){
        const req = axios.post(`${process.env.REACT_APP_API_BASE_URL}/logout`,{}, {
            headers: { Authorization: `Bearer ${user.token}`}
        });
        req.then(()=>{localStorage.clear();history.push("/")});
        req.catch((err)=>{
            if(err.response.status === 500) return alert("Ocorreu um imprevisto, tente novamente!");
            if(err.response.status === 401){
                alert("Você foi desconectado, por favor faça um login novamente!");
                history.push("/");
                localStorage.clear();
                return
            }
        });
    }

    function getWalletItems(){
        const req = axios.get(`${process.env.REACT_APP_API_BASE_URL}/wallet`, {
            headers: { Authorization: `Bearer ${user.token}`}
        });
        req.then(({data})=>{
            setTransactions(data);
            setIsWaitingServer(false);
        });
        req.catch((err)=>{
            if(err.response.status === 500) alert("Ocorreu um imprevisto, tente novamente!");
            if(err.response.status === 401){
                alert("Você foi desconectado, por favor faça um login novamente!");
                history.push("/");
                localStorage.clear();
                return
            }
        });
    }

    useEffect(()=>{
        getWalletItems();
    },[]); //eslint-disable-line

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
            {isWaitingServer ? <Loading /> : 
            transactions.transactions.length ?
            <MyWallet>
                <History>
                    {transactions.transactions.map((t,index)=> <Transaction transaction={t} key={index} />).reverse()}
                </History>
                <Balance><p>SALDO:</p><Price total={transactions.total} >{(transactions.total/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })}</Price></Balance>
            </MyWallet>
            :
            <EmptyBox>
                <h2>Não há registros de entrada ou saída</h2>
            </EmptyBox>
            }
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


export default Wallet