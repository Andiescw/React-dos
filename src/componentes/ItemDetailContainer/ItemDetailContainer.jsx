import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { traerProducto } from "../../utilities/mFetch"


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(0)

    useEffect( () => {
        traerProducto(1)
        .then(res => setProduct(res))
    }, [])


  return (
    <div>
        <ItemDetail {...product}/>
    </div>
  )
}
