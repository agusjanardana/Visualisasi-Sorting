import React from 'react'
import styled from 'styled-components';


function Main({ currentIndex, data, nextIndex, waktu }) {
    console.log("App -> Size ", data);
    const LebarArray = window.screen.width / data.length;
    return (
        <Container>
            <BlockContainer>
                {data.map((size, i) => (
                    <Bar height={`${size}px`}
                        width={`${LebarArray}px`}
                        key={i}
                        active={currentIndex === i}
                        style={nextIndex === i ? { backgroundColor: "green" } : null}
                    />
                ))}
            </BlockContainer>
            <Footer ><p>{`${waktu} ms`}</p></Footer>

        </Container>

    );
}

// const Left = styled.div`
// // display : flex;
//     flex-direction : row;
//     width : 900px;
//     height : 300px;
//     border : 1px solid red;
//     display : inline-block;
//     margin-bottom:250px;
// `
const Container = styled.div`
    position : absolute;
    bottom : 0;
    width : 100%;
`
const BlockContainer = styled.div`
    display : flex;
    flex-direction  :row;
    justify-content: center;
    align-items: flex-end;
    
`
const Footer = styled.div`
    width : 100%;
    height : 50px;
    border : 1px solid red;
    font-weight: bold;

    text-align: center;
`

const Bar = styled.div`
    width : ${(props) => props.width};
    height : ${(props) => props.height};
    background-color: ${(props) => props.active ? "#FCEF87" : "#F24B0F"};
    margin-right:2px;
`
export default Main;