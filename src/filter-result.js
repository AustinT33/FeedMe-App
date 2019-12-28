//import Randomize from './randomize'
import places from './store'

let FilteredResult = places.filter(function(place) {
    const filtered = place.price === '$';
    console.log(filtered)
    return filtered
})

export default FilteredResult