import Loader from "react-loader-spinner";
import styled from "styled-components";

function Loading() {
    return (
        <LoadingContainer>
            <Loader
                type="Puff"
                color="#8c22be"
                height={100}
                width={100}
            />
        </LoadingContainer>
    );
}

const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Loading;