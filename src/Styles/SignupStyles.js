import styled from "styled-components";

export const Main = styled.div`
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

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
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
    margin-bottom: 35px;
`