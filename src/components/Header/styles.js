import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    h1{
        font-weight: 800;
        font-size: 30px;
        line-height: 41px;
    }
    button{
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        cursor: pointer;
        svg{
            width: 25px;
            height: auto;
        }
    }
    
`