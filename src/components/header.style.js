import styled from 'styled-components';

export const Container = styled.div`
    height: 50px;
    width : 100%;
    align-content: center;
    background-color: #F24B0F;
    display: flex;
    flex-direction: row;
    padding-left: 25px;
    padding-right: 25px;
    justify-content: center
`;

export const Container1 = styled.div`
    height : 50px;
    width : 100%;
    display:flex;
    flex-direction: row;
    padding-left: 25px;
    padding-right: 25px;
    justify-content: center;
  
`;
export const Button = styled.p`
    color: #F2EADF;
    cursor: pointer;
    font-size : 12px;
    text-align: center;
    line-height: 30px;
    font-weight: bold;
    &:hover{
        color: #054BA6;
    }
    font-family: Arial, Helvetica, sans-serif;
`;

export const Button1 = styled.p`
    color: #F2A007;
    cursor: pointer;
    font-size : 12px;
    text-align: center;
    line-height: 30px;
    font-weight: bold;
    &:hover{
        color: #F24B0F;
    }
    font-family: Arial, Helvetica, sans-serif;
    margin-right : 25px;
`