import { useEffect, useState } from "react"

export const Categories = () => {
    const [category, setCategory] = useState('');

    useEffect( () =>{
        document.title = `Category ${category}`;
    }, [category]);

    const handleClick = (category) => {
        setCategory(category);
    }

    return(
        <div>
            <h2>Categorias</h2>
            <button onClick={ () => handleClick('Printed')}>Printed Media</button>
            <button onClick={ () => handleClick('Digital')}>Digital</button>
            <button onClick={ () => handleClick('Free stuff')}>Free Stuff</button>
        </div>
    )
}