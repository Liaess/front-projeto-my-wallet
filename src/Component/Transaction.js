import { Line, EachTransaction, Information, Date, Description, Price } from "../Styles/TransactionStyles";

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

export default Transaction;