'use client';

import Button from "./components/button.jsx"
import { INFORMATION } from "./utilities/interfaceInformation.js";

Home.defaultProps = {
  informationPosition: 0,
}

export default function Home(props) {
  return (
    <>
      <section className="flex flex-col items-center ">
          <h1 className="mt-20 mb-7 font-bold w-auto text-5xl">{INFORMATION[props.informationPosition].title}</h1>
          <div className="w-96 mb-12 h-px border border-t border-solid border-gray-line p-0 mx-auto"></div>
        <div className="flex flex-col gap-5 mb-5">

          {INFORMATION[props.informationPosition].buttons.map((button) => (
            <Button texto={button.optionTitle} onClick={button.optionAction} />
          ))}
        </div>
      </section>
    </>
    )
}
