import { useState } from "react";

export const App = ({ value }) => {

  const [contador, Setcontador] = useState(value) 
  const handleClick = () =>{
    Setcontador(contador + 1)
 }
    return(
      <>
        <h1>Contador</h1>
        <p>{contador}</p>
        <button onClick={handleClick}>
          Soy un boton
        </button>
     </>
    )
}