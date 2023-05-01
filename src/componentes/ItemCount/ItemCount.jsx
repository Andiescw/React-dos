import { useCounter } from "../../hook/useCounter"

export const ItemCount = ({ start=1, stock=5, onAdd}) => {
    const { counter, handleAdd, handleRemove } = useCounter(start, 1, stock)   

    return (
        <>
            <label> { counter }</label>
            <button onClick={ handleAdd }> + </button>
            <button onClick={ handleRemove }> </button>
            <button onClick={ ()=>{onAdd(counter)} }>Agregar al Carrito</button>
        </>
    )
}