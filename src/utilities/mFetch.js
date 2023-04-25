let products = [
    { id: '1' ,name: "Flyer" ,precio: '50' ,stock: 4 ,foto: 'React-app\ReactApp\public\flyer.jpg' ,descripcion: "gcjhgvhgvygvy"},
    { id: '2' ,name: "Business card" ,precio: '20' ,stock: 2 ,foto: 'React-app\ReactApp\public\businesscard.jpg' ,descripcion: "gcjhgvhgvygvy"},
    { id: '3' ,name: "Poster" ,precio: '40' ,stock: 8 ,foto: 'React-app\ReactApp\public\poster.jpg' ,descripcion: "gcjhgvhgvygvy"},
]

export const mFetch = () =>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(products)
        }, 5000)
    })
}