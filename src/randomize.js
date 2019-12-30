import React from 'react'
//import {addFavorite} from './routes/logged-in-start-page'
import places from './store'

function Randomize() {
  const random = places[Math.floor(Math.random() * places.length)]
  const result = random.name
      return (
        <>
          <div className="result">You should eat at {result}!</div>
          <button className="faves" type="submit">Add to Favorites?</button>
        </>
      )
    }


export default Randomize
