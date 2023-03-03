'use client';

import Button from "./components/button.jsx"
import ButtonBack from "./components/buttonBack.jsx";
import { useState } from 'react';
import { INFORMATION } from "./utilities/interfaceInformation.js";

export default function Home() {

  const [currentInfo, setCurrentInfo] = useState(0);

  const title = INFORMATION[currentInfo].title;

  const buttons = INFORMATION[currentInfo].buttons;

  const goBackButton = INFORMATION[currentInfo].goBackButton;

  const lastInterface = INFORMATION[currentInfo].lastInteface;

  const setGoBackButton = () => {
    if (goBackButton) {
      return <ButtonBack texto={'Volver'} onClick={() => {setCurrentInfo(lastInterface)}}/>;
    }
    return <div className="ml-8 w-32 h-12"></div>;
  }

  const calculate = (key) => {
    if (currentInfo == 1) {
      
    }
    else if (currentInfo == 2) {
      if (key == 0) {
        
      }
      else {

      }
    }
    else if (currentInfo == 3) {
      if (key == 0) {
        
      }
      else {

      }
    }
    else {
      if (key == 0) {
        
      }
      else {

      }
    }
  }

  return (
    <>
        <div className="flex justify-start mt-10">
            {setGoBackButton()}
        </div>
        <section className="flex flex-col items-center ">
          <h1 className="mt-15 mb-7 font-bold w-auto text-5xl">{title} </h1>
          <div className="w-96 mb-12 h-px border border-t border-solid border-gray-line p-0 mx-auto"></div>
          <div className="flex flex-col gap-5 mb-5">
            {buttons.map((button, index) => (
              <Button key={index} texto={button.optionTitle} 
              onClick={
                () => {
                  if (button.nextInterface != 30) {
                    setCurrentInfo(button.nextInterface);
                  }
                  else {
                    calculate(index);
                  }
                }} />
            ))}
          </div>
        </section>
    </>
  )
}
