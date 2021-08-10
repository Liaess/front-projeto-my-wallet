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
    padding: 25px 25px 40px 25px;
    font-size: 22px;
`

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Input = styled.input`
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

export const Button = styled.button`
    background-color: #a328D6;
    width: 326px;
    height: 46px;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 15px;
`