import React from 'react';
import { Button1, Button, Wrapper1, UkuranSlider, Warna, Wrapper } from './header.style';


function Body({ UbahRange, bubbleOnClick, insertionOnClick, RandomArray }) {

    return (
        <Wrapper>
            <Button1>Visualisasi Sorting</Button1>
            <Button onClick={UbahRange}> Masukkan jumlah array</Button>
            <Button onClick={insertionOnClick}> Insertion Sort</Button>
            <Button onClick={bubbleOnClick}> Bubble Sort</Button>
            <Button onClick={RandomArray}> Random Array Kuy!</Button>
        </Wrapper >
    );
};
export default Body