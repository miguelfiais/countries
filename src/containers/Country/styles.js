import styled from "styled-components";

export const Container = styled.div`
    padding: 1rem;
    padding-top: 2rem;
    button{
        display: flex;
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
    }
    h3{
        margin-top: 2rem;
    }
`
export const InnerContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;
    gap: 10%;
    img{
        max-width: 500px;
        width: 100%;
    }
    ul{
        list-style: none;
    }
`
export const InformationContainer = styled.div`
`
export const ListsContainer = styled.div`
    display: flex;
    gap: 3rem;
    margin: 2rem 0 3rem;
    li{
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
    }
    span{
        font-weight: 300;
    }
`
export const BordersContainer = styled.div`

`