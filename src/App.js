// import { useEffect, useMemo, useRef, useState } from "react";
// import Name from "./components/Name.jsx";
// import Surname from "./components/Surname.jsx";
// import { AiFillCar, AiFillApple } from "react-icons/ai";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Details from './pages/Details';
// import NotFound from './pages/NotFound';
// import AboutDetail from './pages/AboutDetail';

import { useState } from "react";

function App() {
  // const username = 'rouvsen';
  // const familyName = 'Maharramov';

  // const arr = [
  //   {id: 1, name: 'Alex'},
  //   {id: 2, name: 'Amigo'},
  //   {id: 3, name: 'Lagos'}
  // ]

//   const [color, setColor] = useState('blue');
//   const [accountState, setAccountState] = useState('closed')

//   console.log('arr', arr);

// const clickFunc = () => {
//   if (color === 'red') {
//     setColor('blue');
//   } else {
//     setColor('red');
//   }
// }

// const clickFuncStateOfAccount = () => {
//   if (accountState === 'closed') {
//     setAccountState('active');
//   } else {
//     setAccountState('closed');
//   }
// }

  // const [status, setStatus] = useState(false);

  // if(status) {
  //   return (
  //     <div>
  //     your status is true
  //   </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       your status is false
  //       <button onClick={() => setStatus(!status)}>Click</button>
  //     </div>
  //   )
  // }

  // const [status, setStatus] = useState('');

  // useEffect(() => {
  //   setStatus('Hello');
  // }, [])

  // const firstRef = useRef(0);

  // console.log("firstRef", firstRef.current.value = 5);

  // const refFunc = () => {
  //   //firstRef.current
  // }

  // return (
  //   <>
  //   <div>{status}</div>
  //   <input ref={firstRef} onClick={refFunc} placeholder="search"/>
  //   </>
  // )

  // const [count, setCount] = useState(0);//default 0
  // const [text1, setText1] = useState("");//default ""

  // const func = (num) => {
  //   console.log("calculating...");//console
  //   for (let i = 0; i < 1_000_000; i++) {
  //     num += 1;//num++
  //   }
  //   return num;//1_000_000
  // }

  // const memo = useMemo(() => func(count), [count]);//second param it means follow count
  // //memo saving 1_000_000 in memory and don't render, until you change the value of count

  // return (
  //   <>
  //   {memo}
  //   <br></br>
  //   <input value={text1} onChange={e => setText1(e.target.value)} placeholder="search"/>
  //   </>
  // )
  // useMemo - one of the react hooks, greate choice in terms of time/memory/speed, memo is powerfull

  // return (
  //   <>
  //     <AiFillCar/>
  //     <AiFillApple/>
  //   </>
  // )

  const [text, setText] = useState("f.e I should learn English");
  const [message, setMessage] = useState([]);

  // console.log("text", text);

  const onChangeFunc = (val) => {
    setText(val.target.value);
  }

  const messageFunc = () => {
    setMessage(prev => [...prev, text]);
    setText('');
  }

  // console.log("message", message);

  //hover
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const divStyle = {
    backgroundColor: isHovered ? "red" : "yellow",
    padding: "10px",
    margin: "10px" , 
    border: "1px solid black"
  };

  const buttonStyle = {
    backgroundColor: "red",
    color: "white",
    margin: "5px 10px",
    padding: "10px 20px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out"
  };

  const deleteTasksFunc = () => {
    setMessage([]);
  }

  //.. how can I import my own css file? `todo`

  return (
    <>
      {/* <BrowserRouter> */}
      {/* <Switch> //maybe it's old version..
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch> */}
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='/about-detail/:id' element={<AboutDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      {/* </BrowserRouter> */}

        <h1 style={{ textAlign: "center" }}>Welcome to ToDo Application</h1>

        <input value={text} onChange={onChangeFunc} style={{margin: "10px"}} type="text" placeholder="add" />
        <button onClick={messageFunc} >add</button>

        <h3 style={{padding: "15px", margin: "10px", color: "red", border: "1px solid blue"}}>My Todos</h3>

        {
          message?.map((msg, i) => (
            <div className="myDiv" onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} style={divStyle} key={i}> {/* handle here - hover */}
              {msg}
            </div>
          ))
        }

        <button style={buttonStyle} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} onClick={deleteTasksFunc} >Delete All TODOS</button>

    </>
  )
  
}

export default App;
