import Name from "./components/Name.jsx";
import Surname from "./components/Surname.jsx";


function App() {
  const username = 'rouvsen';
  const familyName = 'Maharramov';

  const arr = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Amigo'},
    {id: 3, name: 'Lagos'}
  ]

  console.log('arr', arr);

const clickFunc = () => {
  console.log("You clicked the button");
}

  return (
    <div className="App">
      <Name props1 = {username} />
      <Surname props2 = {familyName} />
      <button onClick={clickFunc}>Submit</button>
          {
            arr.map((el) => (
              <div key={el.id}>{el.name}</div>
            ))
          }

          {/* {
            arr.map((el, i) => ( //define a var like i, see that the elements are different from each other
              <div key={i}>{el.name}</div>
            ))
          } */}
          
    </div>
  );
}

export default App;
