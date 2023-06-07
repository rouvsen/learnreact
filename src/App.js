import { useEffect, useState } from "react";
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

  const [status, setStatus] = useState('');

  useEffect(() => {
    setStatus('Hello');
  }, [])

  return (
    <div>
      {status}
    </div>
  )
  
}

export default App;
