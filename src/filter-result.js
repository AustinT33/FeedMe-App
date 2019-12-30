import React from 'react'
import places from './store'

function Filtered() {
    const filteredResult = places.filter(place => place.price ==='$')
    console.log(filteredResult)
    const filteredChoice = filteredResult[0].name
        return (
            <div>choices={filteredChoice}</div>

        )
    }

export default Filtered