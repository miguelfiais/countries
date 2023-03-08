import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    img{
        border-radius: 8px 8px 0 0;
        width: 320px;
        height: 160px;
    }
    div{
        padding: 1rem;
        h4{
            max-width: 280px;
            margin-bottom: 1rem;
            font-weight: 800;
            font-size: 20px;
            line-height: 27px;
        }
        p{
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
        }
        span{
            font-weight: 300;
        }
    }
`