import styled from "styled-components";

function Transaction({transaction}){
    return(
        <Line>
            <EachTransaction>
                <Information>
                    <Date>
                        {transaction.date}
                    </Date>
                    <Description>
                        {transaction.description}
                    </Description>
                </Information>
                <Price type={transaction.type} >
                    {(transaction.value/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })}
                </Price>
            </EachTransaction>
        </Line>
    )
}

const Line = styled.div`
    display: flex;
    width: 326px;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 5px;
    padding: 10px 10px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 16px;
`

const EachTransaction = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: space-between;
`
const Information = styled.div`
    word-break: break-all;
    line-height: 20px;
`

const Description = styled.span`
    padding-left: 10px;
`

const Date = styled.span`
    color: #c6c6c6;
    letter-spacing: 2px;
`

const Price = styled.div`
    color: ${props => props.type === "Revenue" ? "green" : "red"};
    padding-left: 8px;
`

export default Transaction;