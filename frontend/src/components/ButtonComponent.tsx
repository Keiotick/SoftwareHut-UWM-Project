import React from 'react';

interface ButtonComponentProps {
    onNumberChange?: () => void;
    ButttonsName?: string;
}

const ButtonComponent:React.FC<ButtonComponentProps> = ({ onNumberChange, ButttonsName  }) => {
    return (
        <button onClick={onNumberChange}>{ButttonsName}</button>
    );
};
export default ButtonComponent;