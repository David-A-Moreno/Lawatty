import React from 'react';

const Button = ({ texto, onClick }) => {
  return (
    <button onClick={onClick} className="bg-white hover:bg-blue-700 text-blue-text-button font-bold
      py-2 px-4 rounded-xl text-xl border w-80 border-blue-text-button h-12">
      {texto}
    </button>
  );
}

export default Button;