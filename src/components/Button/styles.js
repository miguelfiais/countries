import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: max-content;
    align-items: center;
    gap: 12px;
    padding: 8px 20px;
    border: none;
    background-color: #fff;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.6;
    }
`