import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react' //hook
import gFetch from '../../helpers/gFetch'





const NumberCounter = () => {
    const [boolean, setBoolean] = useState(true)    //este "true" es boolean = true

    //-- se renderiza por primera vez y cuando cambia el boolean --//
    useEffect(()=>{
        console.log('detecta el cambio de boolean y solo se renderiza cuando este cambia: ' + boolean)
    }, [boolean])
   
    const handleBoolean = () => {
        setBoolean(!boolean)
    }

  return (
        <div>
            <NumberCounter/>
            {/* <button className='btn btn-outline-primary' onClick={handleBoolean}>{boolean}ejecute boolean</button> */}
            <button className='btn btn-outline-secondary'>Add To Cart</button>
        </div>
        
        
  )
    
}


function Counter({stock = 5, initial = 1, onAdd}) {
    
    const [counter, setCounter] = useState(initial)       //este "0" es counter = 0
    const [date, setDate] = useState(Date())
    // const stock = 12
    // const initial = 1
    
    const handleOnAdd = () => onAdd(counter)
    
    //-- crea uno nuevo cada vez que se renderiza Counter --//
    useEffect(()=>{
        console.log("addEventListener")
        return () =>{
            console.log("clean up - remove addEventListener")
        }
    }, [counter])

    const handleCountPlus = () => {
        if (counter < stock) {
            
            setCounter(counter + 1)
            setDate(Date())
        }
    }
    const handleCountMinus = () => {
        if (counter > initial) {
            
            setCounter(counter - 1)
            setDate(Date())
        }
    }

    return(
        <div>
            {/* {date} */}
            <div>
                <button className=' btn btn-outline-secondary counterBtn' onClick={handleCountMinus}>-</button>
                {counter}
                <button className='btn btn-outline-secondary counterBtn' onClick={handleCountPlus}>+</button>

                <button className='btn btn-outline-secondary ' onClick={ handleOnAdd }>add to cart</button>
            </div>
        </div>
    )
}

export default Counter