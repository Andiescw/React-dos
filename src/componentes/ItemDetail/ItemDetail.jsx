import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"
import { useState } from "react"


export const ItemDetail = ({product}) => {
    const [ isInCart, setIsInCart ] = useState(false)

    const {addToCart} = useCartContext()
    
    const onAdd = (quantity) =>{
        console.log(cantidad)
        addToCart( {...product, quantity } )
        setIsInCart(true)
    }

  return (
    <div>
        <>
            <div className="row">
                <div className="col">
                    <img src={product.foto} className="w-50" alt="producto"/>
                    <h3>Nombre: {product.name} </h3>
                    <h5>Categoria: {product.category} </h5>
                    <h5>Precio: {product.precio} </h5>
                    <h5>Stock: {product.stock}</h5>
                </div>
                <div className="col">
                    {isInCart  ?
                        <>
                            <Link className="btn btn-outline-primary" to='/cart'>Ir a Pagar</Link>
                            <Link className="btn btn-outline-primary" to=''>Continuar Comprando</Link>
                        </>
                        :
                        <ItemCount onAdd={onAdd}/>
                    }

                </div>
            </div>
        </>
    </div>
  )
}
