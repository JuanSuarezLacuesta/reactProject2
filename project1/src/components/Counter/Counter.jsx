import { useEffect } from 'react'
import { useState } from 'react'

import gFetch from '../../helpers/gFetch'


function Counter({ stock = 5, initial = 1, onAdd }) {

    const [counter, setCounter] = useState(initial)

    const handleOnAdd = () => onAdd(counter)


    const handleCountPlus = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const handleCountMinus = () => {
        if (counter > initial) {
            setCounter(counter - 1)
        }
    }

    return (

        <div>
            <button className=' btn btn-outline-secondary counterBtn' onClick={handleCountMinus}>-</button>
            {counter}
            <button className='btn btn-outline-secondary counterBtn' onClick={handleCountPlus}>+</button>

            <button className='btn btn-outline-secondary ' onClick={handleOnAdd}>add to cart</button>
        </div>
    )
}

export default Counter