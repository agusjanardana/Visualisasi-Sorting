import React, { useEffect, useState } from 'react';
import Body from '../components/Body';
import Main from './Main';
import { sleep } from '../helpers/tidur';

import "./App.style.css";

function App() {

  const [size, setSize] = useState(200); // default jumlah arraynya 200 aja.
  const [arr, setArr] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentNext, setCurrentNext] = useState(null);
  const [CurrentTime, setLastTime] = useState(0);

  useEffect(() => {
    UbahArray();
  }, [size]);


  const UbahArray = () => {
    // console.log("PROSES UPDATE");
    const randomArr = Array.from({ length: size },
      () => generateRandomInteger(50, 500)
    );

    setArr(randomArr)
    // console.log("App -> Size ", size);
    // console.log("UpdateList -> randomArr", randomArr);
  };
  const generateRandomInteger = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  const generateRandomArray = () => { // buat random list // next features
    const sizeOfArray = generateRandomInteger(5, 100);
    const randomArr = Array.from({ length: sizeOfArray }, () =>
      generateRandomInteger(50, 500)
    );
    setArr(randomArr);
    setLastTime(0);

  }


  const UbahRange = () => {
    const range = prompt("Seberapa banyak data yang ingin anda sort")
    if (range > 500) {
      alert("Max 500 data , maaf server kami tidak kuat");
      return
    }
    setSize(range);
    setLastTime(0);
  };

  // const [arrBubble, setArrBubble] = useState([]);

  const bubbleOnClick = async () => {
    // didalem sini array nya di copy
    // buat state baru 
    // setArrBubble(arr)
    var start = performance.now();
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        setCurrentIndex(i);
        setCurrentNext(i + 1);
        if (arr[j] > arr[j + 1]) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
          setArr([...arr]);
        }
      }
      await sleep(1);
    }
    setCurrentIndex(null);
    var elapsed = performance.now() - start
    setLastTime(elapsed);
    console.log(`${elapsed} ms`)
  };

  const insertionOnClick = async () => {
    var start = performance.now();
    const len = arr.length;
    for (let i = 1; i < len; i++) {
      let key = arr[i];
      let j = i - 1;
      setCurrentIndex(i);
      setCurrentNext(i + 1);
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
        setArr([...arr]);
      }
      arr[j + 1] = key;
      await sleep(1);
    }
    setCurrentIndex(null);
    var elapsed = performance.now() - start
    setLastTime(elapsed);
  }

  return (
    <div className="App">
      {/* <Header /> */}
      <Body
        UbahRange={UbahRange}
        bubbleOnClick={bubbleOnClick}
        insertionOnClick={insertionOnClick}
        RandomArray={generateRandomArray}
      />
      <Main data={arr} currentIndex={currentIndex} nextIndex={currentNext} waktu={CurrentTime} />
    </div >
  );
}

export default App;
