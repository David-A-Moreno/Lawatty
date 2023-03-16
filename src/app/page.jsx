'use client';

import Button from "./components/button.jsx"
import ButtonBack from "./components/buttonBack.jsx";
import { useState } from 'react';
import { INFORMATION } from "./utilities/interfaceInformation.js";
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { setLastInterface, setSessionTime, setCurrentInfoPrincipalPage } from "./features/answers/answersSlice.js";

export default function Home() {

  //const currentInfo = useSelector(state => state.answers.currentInfoPrincipalPage);

  const [currentInfo, setCurrentInfo] = useState(0);

  const title = INFORMATION[currentInfo].title;

  const buttons = INFORMATION[currentInfo].buttons;

  const goBackButton = INFORMATION[currentInfo].goBackButton;

  const oldInterface = useSelector(state => state.answers.lastInterface);

  const lastInterface = INFORMATION[currentInfo].lastInteface;

  const router = useRouter();

  const dispatch = useDispatch();

  const sessionSystem = useSelector(state => state.answers.sessionTime)

  const setGoBackButton = () => {
    if (goBackButton) {
      return <ButtonBack texto={'Volver'} onClick={() => {setCurrentInfo(lastInterface)}}/>;
    }
    return <div className="ml-8 w-32 h-12"></div>;
  }

  const changeInterface = (nextInterface, isNewPage) => {
    if (isNewPage) {
      router.push(nextInterface);
    } else {
      //dispatch(setCurrentInfoPrincipalPage(nextInterface));
      setCurrentInfo(nextInterface);
    }
    //dispatch(setLastInterface(useSelector(state => state.answers.currentInfoPrincipalPage)));
  }

  /*
    Define el tipo el sistema de tiempos de estudio y descanso que se va a utilizar
    dependiendo de lo que se respondio en las preguntas iniciales:

    1) 10 minutos de descanso en una hora donde el usuario elige cuando los toma, este tiempo descanso
        no es acumulable con otras horas. Se puede tomar una pausa de emergencia que exceda los
        10 minutos tomando los tiempos de descanso de las horas de estudio siguientes.
    2) 15 minutos fijos de descanso cada 45 minutos, cada dos horas ese descanso aumenta 5 minutos
    3) 5 minutos de descanso iniciales cada 25 minutos, este tiempo de descanso aumenta 5 minutos
        cada ronda de estudio hasta un maximo de 20 minutos
    4) 15 minutos fijos de descanso cada hora.
  */

  const calculate = (key) => {
    let sessionSystemSelected = null;
    if (currentInfo == 1) {
      sessionSystemSelected = 2;
    }
    else if (currentInfo == 2) {
      if (key == 0) {
        sessionSystemSelected = 2;
      }
      else {
        sessionSystemSelected = 3;
      }
    }
    else if (currentInfo == 3) {
      if (key == 0) {
        sessionSystemSelected = 1;
      }
      else {
        sessionSystemSelected = 2;
      }
    }
    else {
      if (key == 0) {
        sessionSystemSelected = 2;
      }
      else {
        sessionSystemSelected = 1;
      }
    }
    dispatch(setSessionTime(sessionSystemSelected));
  }

  return (
    <>
        <div className="flex justify-start mt-10 ml-8">
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
                  if (currentInfo == 0) {
                    if (index == 1 || index == 2) {
                      changeInterface(button.nextInterface, true);
                    }
                    else {
                      changeInterface(button.nextInterface, false);
                    }
                  }
                  else if (currentInfo == 1) {
                    if (index == 2) {
                      changeInterface(button.nextInterface, true);
                    }
                    else {
                      changeInterface(button.nextInterface, false);
                    }
                  }
                  else if (currentInfo == 4) {
                    changeInterface(button.nextInterface, false);
                  }
                  else {
                    changeInterface(button.nextInterface, true);
                  }
                }} />
            ))}
          </div>
        </section>
    </>
  )
}
