import React from 'react'
import { memo } from "react"
import { Item } from '../Item/Item'

export const ItemList = memo( ({products})  => {
  return (
    <div className="container">
        {products.map( ({id, foto, name, precio, category}) => (
        <Item
          key={id}
          id={id}
          foto={foto}
          name={name}
          precio={precio}
          categoria={category}
        />
        ))}

    </div>
  )
}
)