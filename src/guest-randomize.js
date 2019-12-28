import React from 'react'
import places from './store'

function GuestRandomize() {
      const random = places[Math.floor(Math.random() * places.length)]
      const result = random.name
      return (
          <div className="result">You should eat at {result}!</div>
      )
    }

export default GuestRandomize