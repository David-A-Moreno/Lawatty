'use client';

import Button from "./components/button.jsx"

const handleClick = () => {
  console.log('Se hizo clic en el botón');
};

Home.defaultProps = {
  title: '¿Qué quieres hacer?',
}

export default function Home(props) {
  return (
    <>
      <section className="flex flex-col items-center ">
          <h1 className="mt-20 mb-7 font-bold w-auto text-5xl">{props.title}</h1>
          <div className="w-96 mb-12 h-px border border-t border-solid border-gray-line p-0 mx-auto"></div>
        <div className="flex flex-col gap-5 mb-5">
          <Button texto="Sesión de estudio o trabajo" onClick={handleClick} />
          <Button texto="Sesión de lectura" onClick={handleClick} />
          <Button texto="Ver estadísticas" onClick={handleClick} />
        </div>
      </section>
    </>
    )
}
