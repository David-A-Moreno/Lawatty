'use client';

import Button from "./components/button.jsx"

const handleClick = () => {
  console.log('Se hizo clic en el botón');
};

Home.defaultProps = {
  title: '¡Bienvenido!',
  subtitle: '¿Qué quieres hacer hoy?'
  
}

export default function Home(props) {
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="mt-20 flex">
          <h1 className="font-bold w-auto">{props.title}</h1>
        </div>
        <div className="flex">
          <Button texto="Desarrollo de Videojuegos" onClick={handleClick} />
        </div>
        
      </div>
      
    </>
    )
}
