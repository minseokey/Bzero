import React, {useState, useEffect} from "react";
import './App.css';
import RegistBottleStore from "./RegistBottleStore";
import info_photo from "./images/info_photo.jpg";
import photo1 from "./images/photo1.png";
import photo2 from "./images/photo2.png";
import photo3 from "./images/photo3.png";

const dummyList = [
  {
    name : "공병스토어1",
    grade : 3,
    info_summary : "이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...",
    collectable:"",
    info_photo: info_photo,
    photo1: photo1,
    photo2: photo2,
    photo3: photo3,
    store_url:"www.naver.com",
    map: "",
    businessday : "평일 오전 10시 - 오후 7시",
    collectday : "매주 수요일 오전 10시 - 오후 7시",
    address : "서울특별시 OO구 OO 길 1232-12(OO동)",
    number : "02-OOO-OOOO",
    info_title:"가게에 대한 설명 (부제목)",
    info:"가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~",

  },
]

function App() {

  return (
    <div className="App">
      <RegistBottleStore/>
      {/*< BottleStore store={dummyList}/>*/}
    </div>
  );
}

export default App;

// < BottleStore store={dummyList}/>
