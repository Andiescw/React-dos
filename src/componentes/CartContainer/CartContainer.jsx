import React from 'react'

export const CartContainer = () => {
    const {cartList, vaciarCarrito} = useCartContext()
  return (
    <div>
        {cartList.map(prod => (
            <div className="w-50">
                <img className="w-25" src={prod.foto} alt="producto" />
                <label>Precio: {prod.price} - Cantidad: {prod.cantidad}</label>
                <button> X </button>
            </div>
        ))}
        <button onClick={vaciarCarrito} className="btn btn-outline-danger">Vaciar Carrito</button>
    </div>
  )
}
