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
        color: rgb(17, 21, 23);
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
        color: rgb(17, 21, 23);
        cursor: pointer;
        svg{
            width: 25px;
            height: auto;
        }
    }
    @media screen and (max-width: 1000px){
        h1{
            font-size: 24px;
            line-height: 33px;
        }        
    }
    @media screen and (max-width: 600px){
        h1{
            font-size: 20px;
            line-height: 27px;
        }        
        button span{
            display: none;
        }
    }
    
`