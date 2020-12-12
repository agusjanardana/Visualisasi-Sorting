import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 50px;
    width : 100%;
    align-content: center;
    background-color: #F24B0F;
    display: flex;
    flex-direction: row;
    padding-left: 25px;
    padding-right: 25px;
    justify-content: space-evenly;
`;

// export const Wrapper1 = styled.div`
//     height : 50px;
//     width : 100%;
//     display:flex;
//     flex-direction: row;
//     padding-left: 25px;
//     padding-right: 25px;
//     justify-content: center;

// `;
export const Button = styled.p`
    color: #F2EADF;
    cursor: pointer;
    font-size : 12px;
    // text-align: center;
    line-height: 30px;
    font-weight: bold;
    &:hover{
        color: #054BA6;
    }
    font-family: Arial, Helvetica, sans-serif;
`;

export const Button1 = styled.p`
    color: #F2EADF;
    font-size : 12px;
    text-align: center;
    line-height: 30px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    margin-right : 25px;

`

export const UkuranSlider = styled.div`
   display : flex;
    width: 200px;
    flex-direction: row;
    align-content:center;
    justify-content: center;
    margin-top: 10px;
`

export const Warna = styled.p`
    color : #F24B0F;
    font-weight : bold;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    line-height: 30px;
`