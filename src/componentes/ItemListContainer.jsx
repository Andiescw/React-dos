import { useEffect, useState } from "react"
import { mFetch } from "../utilities/mFetch"


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        mFetch() 
        .then( resultado => {
            setProductos(resultado)
        })
        .catch( error => console.log(error) )
        .finally(()=> setIsLoading(false))
    })
    
    console.log(products)
    return(
        <div>
                { isLoading ? 
                    <h2>Cargando...</h2>
                :
                products.map( ({id, foto, name, precio, descripcion}) => 
                <div key={id} className="card w-25">
                    <img src={foto}className="card-img-top" alt=""></img>
                    <div class="card-body">
                        <h5 class="card-title"> {name} </h5>
                        <label> {precio} </label>
                        <p class="card-text">{descripcion}</p>
                        <a href="#" class="btn btn-primary">Detalle</a>
                    </div>
                </div>) }
        </div>
    )
}

export default ItemListContainer