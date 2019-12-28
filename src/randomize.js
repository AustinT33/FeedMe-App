import React from 'react'
//import {addFavorite} from './routes/logged-in-start-page'
let places = [
    {
        id: 1,
        name: 'Taco Bell',
        type: 'Mexican',
        price: '$'
    },
    {
        id: 2,
        name: 'Olive Garden',
        type: 'Italian',
        price: '$$$'
    },
    {
        id: 3,
        name: 'Arbys',
        type: 'American',
        price: '$$'
    },
    {
        id: 4,
        name: 'Seasons 52',
        type: 'Fancy',
        price: '$$$$'
    },
    {
        id: 5,
        name: 'McDonalds',
        type: 'American',
        price: '$'
    },
    {
        id: 6,
        name: 'Cheesecake Factory',
        type: 'Fancy',
        price: '$$$$'
    },
    {
        id: 7,
        name: 'Luna Grill',
        type: 'Greek',
        price: '$$$'
    },
    {
        id: 8,
        name: 'Little Greek',
        type: 'Greek',
        price: '$$'
    }
];

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
