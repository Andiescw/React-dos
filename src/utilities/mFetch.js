let products = [
    { id: '1' ,category: "Printed", name: "Flyer" ,precio: '50' ,stock: 8 ,foto: './flyer.jpg' ,descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    { id: '2' ,category: "Printed", name: "Postal" ,precio: '10' ,stock: 5 ,foto: './businesscard.jpg' ,descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    { id: '3' ,category: "Printed", name: "Poster" ,precio: '80' ,stock: 10 ,foto: './poster.jpg' ,descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    { id: '4' ,category: "Digital", name: "Fondo de Pantalla Grande" ,precio: '30' ,stock: 20 ,foto: './poster.jpg' ,descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    { id: '5' ,category: "Digital", name: "Notion Template" ,precio: '100' ,stock: 8 ,foto: './poster.jpg' ,descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
]

export const mFetch = () =>{
    return new Promise((res)=>{
        setTimeout(()=>{
            res(products)
        }, 4000)
    })
}

export const traerProducto = () => {
    return new Promise(res => {
        setTimeout( () => {
            res(products);
            const product = products.find(prod => prod.id === id);
            res(product);
        }, 3000)
    })
}

export const getCategories = () => {
    return new Promise(res =>{
        setTimeout( ()=>{
            const productCategories = products.filter(prod => prod.idCart === idCategory);
            res(productCategories);
        }, 1000)
    })
}