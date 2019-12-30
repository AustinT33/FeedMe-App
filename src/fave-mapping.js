import places from './store'
import React from 'react'

function Faves() {
    // const random = places[Math.floor(Math.random() * places.length)]
    // const result = random.name
    const results = 
        places.map((item, i) => (
            <li>
                {/* {places} -{" "} */}
                <a
                    href="/delete"
                    onClick={e => {
                        e.preventDefault()
                        this.props.removeFavorite(i)
                    }}
                > 
                    X
                </a>
            </li>
        ))
    return (
            results
    )
}

export default Faves