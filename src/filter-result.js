import React from 'react'
import places from './store'

function Filtered() {
    const filteredResult = places.filter(place => place.price ==='$')
    console.log(filteredResult)
        return (
            <div>choices={filteredResult}</div>

        )
    }

export default Filtered