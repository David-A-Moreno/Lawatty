import React from 'react';

const Button = ({ texto, onClick, widht }) => {

  return (
    <button onClick={onClick} className={`w-${widht} bg-white hover:bg-hover-color-button active:bg-click-color-button text-blue-text-button font-bold py-2 px-4 rounded-xl text-xl border border-blue-text-button h-12 shadow-sm shadow-purple-text `}>
      {texto}
    </button>
  );
}

export default Button;