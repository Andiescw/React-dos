import React, { memo } from 'react'
import { Link } from 'react-router-dom'


export const Item = memo( ({id, foto, name, precio, descripcion, category}) => {
    
  return (
    <div className="card w-25">
                    <Link to={`/detail/${id}`}>
                    <img src={foto} className="card-img-top img-fluid" alt=""></img>
                    </Link>

                    <div className="card-body">
                        <h5 className="card-title"> {name} </h5>
                        <label> ${precio}.00 MXN </label>
                        <p className="card-text">{descripcion}</p>
                        <p className="card-text">{category}</p>
                        <a href="./itemDetail" className="btn">Detalle</a>
                    </div>
                </div> )
}
)
