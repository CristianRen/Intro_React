// export default function prueba() {
//   const nom = 'Rafael';
//   const edad = 20;
//   return (

//     <p>Hola {nom} tienes {edad} años, asi que eres {' '} {edad >= 18 ? 'mayor' : 'menor'} de edad{' '} </p>
//   )
// }
export default function ComponentePadre() {
  const nombres = ['María', 'Juan', 'Pedro', 'Cristian', 'Sara', 'Jorge'];
  return (
    <>
      <ul>
        {/* <ComponenteHijo nombres={nombres}></ComponenteHijo> */}
        {
          nombres.map((elemento, i) =>{
            return <ComponenteHijo nombres={elemento} numero={i}></ComponenteHijo>
          })
        }
      </ul>
    </>
  )

}
const ComponenteHijo = (datos) => {
  return (
    <li>
      <p>{datos.numero} <strong>{datos.nombres}</strong></p>
    </li>
  )
}

// const ComponenteHijo = (datos) => {
//   return (
//     <ul>
//       {datos.nombres.map((elemento)=>{
//         return <li>{elemento} </li>
//       })}
//     </ul>
//   );
// }
