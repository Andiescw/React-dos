import { useEffect, useState } from "react"
import { mFetch } from "../../utilities/mFetch"
import { Loading } from "../Loading/Loading";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";


import './items.css'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { category } = useParams()

    useEffect(()=>{

    if(!category) {
        mFetch() 
        .then( resultado => {
            setProducts(resultado)
        })
        .catch( error => console.log(error) )
        .finally(()=> setIsLoading(false))
    }else{
        mFetch()
        .then ( resultado=> {
            setProducts(resultado.filter(product => product.category === category))
        })
        .catch( error => console.log(error) )
        .finally(() => setIsLoading(false))
    }
}, [category])
        
    return(
        <>
                { isLoading ? 
                <Loading />
                :
                <ItemList products={products} />
            }
        </>
    )
}

export default ItemListContainer
