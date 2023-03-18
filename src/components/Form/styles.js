import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: rgb(245, 245, 245);
    input{
        width: 100%;
        max-width: 400px;
        height: 57px;
        border-radius: 4px;
        border: 1px solid #c3c3c3;
        padding-left: 12px;
    }
    @media screen and (max-width: 700px){
        flex-direction: column;
        gap: 1rem;
    }
`