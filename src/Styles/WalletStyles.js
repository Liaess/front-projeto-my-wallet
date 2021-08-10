import styled from "styled-components";

export const Main = styled.div`
    background-color: #8c22be;
    width: 100vw;
    min-height: 100vh;
    font-family: 'Raleway', sans-serif;
`

export const Header = styled.div`
    display: flex;
    color: #fff;
    font-weight: 700;
    justify-content: space-between;
    padding: 25px 25px 20px 25px;
    font-size: 22px;
`

export const MyWallet = styled.div`
    display: flex;
    width: 326px;
    min-height: 446px;
    max-height: 446px;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 5px;
    flex-direction: column;
    justify-content: space-between;
    h2{
        width: 60%;
        font-weight: 400;
        text-align: center;
        color: #868686;
        font-size: 20px;
    }
`

export const History = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`

export const Price = styled.span`
    color: ${props => props.total > 0 ? "green" : "red"};
`

export const EmptyBox = styled.div`
    display: flex;
    width: 326px;
    min-height: 446px;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2{
        width: 60%;
        font-weight: 400;
        text-align: center;
        color: #868686;
        font-size: 20px;
    }
`

export const Create = styled.div`
    width: 326px;
    min-height: 114px;
    margin: 0 auto;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;
    color: #fff;
`

export const Revenue = styled.div`
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

export const Expense = styled.div`
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

export const Balance = styled.div`
    display:flex;
    justify-content: space-between;
    font-family: 'Raleway';
    font-size: 17px;
    color: #000000;
    padding: 10px 10px;
    word-break: break-all;
    p{
        font-weight: bold;
        min-width: 65px;
    }
`;