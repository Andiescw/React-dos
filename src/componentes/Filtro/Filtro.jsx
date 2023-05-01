const { useState } = require("react")

export const Filter = ({children}) => {
    const [filterState, setFilterState] = useState('')

    const handleFilterChange = (evt) =>{
        setFilterState(evt.target.value)
    }

    return children ( {filterState, handleFilterChange} )
}