import styled from "styled-components";
import Button from "../../components/Button"

export const Container = styled.div`
    padding: 1rem;
    padding-top: 2rem;
    >h3{
        margin-top: 2rem;
    }
`
export const ButtonStyles = styled(Button)`
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    @media screen and (max-width: 500px){
        font-size: 14px;
        line-height: 19px;
    }

`
export const InnerContainer = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    margin-top: 2rem;
    gap: 10%;
    img{
        max-width: 100%;
        width: 500px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    }
    @media screen and (max-width: 1060px){
        grid-template-columns: 1fr;
        gap: 1rem;
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
    @media screen and (max-width: 500px){
        flex-direction: column;
        gap: 2rem;
        margin: 2rem 0;
        li{
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;
        }
    }
`
export const BordersContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    div{
        max-width: 660px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
    }
`