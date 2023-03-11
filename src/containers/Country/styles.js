import styled from "styled-components";

export const Container = styled.div`
    padding: 1rem;
    padding-top: 2rem;
    >h3{
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
`
export const InformationContainer = styled.div`
`
export const ListsContainer = styled.div`
    display: flex;
    gap: 3rem;
    margin: 2rem 0 3rem;
    ul{
        list-style: none;
    }
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
    display: flex;
    align-items: center;
    gap: 12px;
    div{
        display: flex;
        align-items: center;
        gap: 12px;
    }
`