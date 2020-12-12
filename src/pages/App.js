import React, { useEffect, useState } from 'react';
import Body from '../components/Body';
import Main from './Main';
import { bubbleSort } from '../helpers/bublesort';
import { sleep } from '../helpers/tidur';

import "./App.style.css";

function App() {

  const [size, setSize] = useState(200); // default jumlah arraynya 200 aja.
  const [arr, setArr] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentNext, setCurrentNext] = useState(null);

  useEffect(() => {
    UbahArray();
  }, [size]);

  const UbahArray = () => {
    console.log("PROSES UPDATE");
    const randomArr = Array.from({ length: size },
      () => Math.floor(Math.random() * 300)
    );

    setArr(randomArr)
    // console.log("App -> Size ", size);
    // console.log("UpdateList -> randomArr", randomArr);
  };

  const UbahRange = () => {
    const range = prompt("Seberapa banyak data yang ingin anda sort")
    if (range > 1000) {
      alert("Max 1000 data , maaf server kami tidak kuat");
      return
    }
    setSize(range);
  };

  const bubbleOnClick = async () => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        setCurrentIndex(i);
        setCurrentNext(i);
        if (arr[j] > arr[i + 1]) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
          setArr([...arr]);
        }
      }
      await sleep(1);
    }
    setCurrentIndex(null);
  }

  return (
    <div className="App">
      {/* <Header /> */}
      <Body UbahRange={UbahRange} bubbleOnClick={bubbleOnClick} />
      <Main data={arr} currentIndex={currentIndex} nextIndex={currentIndex} />
    </div >
  );
}

export default App;
