// import { useEffect, useMemo, useRef, useState } from "react";
// import Name from "./components/Name.jsx";
// import Surname from "./components/Surname.jsx";


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

  
  
}

export default App;
