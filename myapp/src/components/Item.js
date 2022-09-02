import { useState } from "react"

export default function Item({ comprarItem, nombre, descripcion, stock }) {
    const [cantidad, setCantidad] = useState(stock)

    const comprar = () =>{
        setCantidad(cantidad-1)
        comprarItem()
    }

    return (
      <div className='producto'>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <h5>En stock: {cantidad > 0 ? cantidad : <span>agotado</span>}</h5>
        <button disabled={cantidad <= 0} onClick={comprar}>{cantidad > 0? "Comprar" : "Sin stock"}</button>
      </div>
    )
  }