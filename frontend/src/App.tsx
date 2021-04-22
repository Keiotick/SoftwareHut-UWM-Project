import React from 'react';
import './App.css';

//import CustomHeader, { addNumber } from './components/CustomHeader';
import Counter from './components/Counter';
import CustomHeader from './components/CustomHeader';

const App = () => {
  //const addedNumber = addNumber(1, 2);
   const [changedNumber, setChangedNumber ] = React.useState(0);

  const handleNumberChange = (newNumber: number) => {
    setChangedNumber(newNumber);
    //console.log(newNumber)
   // return newNumber;
  }
  
  const greaterThen10 = (liczba: number) =>
  {
    if (liczba > 10 && liczba < 16){
      return (<div>Liczba jest większa od 10</div>)
    }
  }

  const greaterThen15 = (liczba: number) =>
  {
    if (liczba > 15){
      return (<div>Liczba przekroczona</div>)
    }
  }


  return (
    <div className="App">
      <CustomHeader>  
              
        {/* <Counter onNumberChange={(newNumber)=>{ console.log(newNumber) }}/> */}
        {/* <ResetValue onNumberChange={handleNumberChange}/> */}
        <Counter onNumberChange={handleNumberChange}/>
        {
          changedNumber < -10 && (<div> Liczba jest mniejsza od -10</div>)
        }
        {greaterThen10(changedNumber)}
        {greaterThen15(changedNumber)}
      </CustomHeader>
      
    </div>
  );

}

export default App;