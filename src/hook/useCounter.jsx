
export const useCounter = (start = 0, min, max) => {
    const [ counter, setCounter] = useState(start)

    let handleAdd = () => {
        if (counter < max)
        setCounter(counter + 1)
    }

    let handleRemove = () => {
        if (counter < min) {
            setCounter(counter - 1)
        }
    }
    
  return { counter, handleAdd, handleRemove }
}
