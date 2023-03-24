'use client';
import ButtonBack from "../components/buttonBack";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import { setLastInterface, setSessionTime } from "../features/answers/answersSlice";
import { useState } from 'react';
import Button from "../components/button";

export default function Time({ timeSystem }) {

    const [checked, setChecked] = useState(false);

    function handleChange() {
        setChecked(!checked);
    }

    return (
        <>
            <div className="flex justify-between mt-10">
                <button onClick={console.log('jeje')} className=" bg-suspend-session-button-color hover:bg-hover-suspend-session-color active:bg-click-suspend-session-color text-white font-bold py-2 px-4 rounded-xl w-46 text-xl border  border-suspend-session-button-color ml-8 h-12 shadow-sm shadow-purple-text">
                    Suspender Sesión
                </button>
                <div className=" flex flex-col items-center gap-10">
                    <button onClick={console.log('jeje')} className=" bg-suspend-session-button-color hover:bg-hover-suspend-session-color active:bg-click-suspend-session-color text-white font-bold py-2 px-4 rounded-xl w-46 text-xl border  border-suspend-session-button-color h-12 mr-8  shadow-sm shadow-purple-text">
                        Suspender Sesión
                    </button>

                </div>
            </div>

            <div className="flex">
                <div className="w-2/6 "/>
                <section className="flex flex-col items-center w-2/6 ">
                    <h1 className="mt-15 mb-7 font-bold w-auto text-5xl">Estudiando...</h1>
                    <div className="w-96 mb-12 h-px border border-t border-solid border-gray-line p-0 mx-auto"></div>
                    <div className="flex justify-center item gap-4 mb-12">
                        <div className="text-center">
                            <p className="px-10 py-3 text-4xl border border-black rounded-xl">00</p>
                            <p className="text-lg pt-2">Hora</p>
                        </div>
                        <div className="text-center">
                            <p className="px-10 py-3 text-4xl border border-black rounded-xl">00</p>
                            <p className="text-lg pt-2">Minutos</p>
                        </div>
                        <div className="text-center">
                            <p className="px-10 py-3 text-4xl border border-black rounded-xl">00</p>
                            <p className="text-lg pt-2">Segundos</p>
                        </div>
                    </div>
                    <button onClick={console.log('jeje')} className=" bg-rest-button-color hover:bg-hover-rest-color active:bg-click-rest-color text-white font-bold py-2 px-4 rounded-xl w-64 text-xl border mb-5 border-rest-button-color h-12 shadow-sm shadow-purple-text">
                        Descansar
                    </button>
                </section>
                <div className="flex flex-col items-center gap-5 w-2/6 pl-36 pt-5">
                    <Button texto={'Pausa Necesaria'} widht={60} onClick={console.log('pausa necesaria')} />
                    <label className="inline-flex items-center">
                        <span className="mr-2 text-gray-700">Sonido de alerta</span>
                        <input type="checkbox" className="form-checkbox h-8 w-8 font-bold text-indigo-600" checked={checked} onChange={handleChange} />
                    </label>
                </div>
            </div>
        </>
    );
}