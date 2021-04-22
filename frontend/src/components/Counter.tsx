import React from 'react';
import Btn from './ButtonComponent';

interface CounterProps {
    initialNumber?: number;
    onNumberChange?: (someNumber: number) => void;
}

const Counter:React.FC<CounterProps> = ({ initialNumber, onNumberChange }) => {
    const [counterNumber, setCounterNumber] = React.useState(initialNumber || 0);
    // const obj = {a: 1, b: 2};
    // const {a, b} = obj;

    const addNumber = () => {
        const number = counterNumber + 1;
        setCounterNumber(number);
        // if(onNumberChange)
        // {
        //     onNumberChange(number);
        // }
        onNumberChange && onNumberChange(number);
    }

    const decreaseNumber = () => {
        const number = counterNumber - 1;
        setCounterNumber(number);
        onNumberChange && onNumberChange(number);
    }

    const resetNumber = () => {
        const number = 0;
        setCounterNumber(number);
        onNumberChange && onNumberChange(number);
    }

    return (
        <div>
            <Btn ButttonsName={'Reset'} onNumberChange={resetNumber}/><br/>
            <Btn ButttonsName={'+'} onNumberChange={addNumber}/>
            {counterNumber}
            <Btn ButttonsName={'-'} onNumberChange={decreaseNumber}/>
        </div>
    );
};
export default Counter;